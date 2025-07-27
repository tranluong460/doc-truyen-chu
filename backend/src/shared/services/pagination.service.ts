/* eslint-disable
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access
*/

import { DatabaseService } from '@modules/database/database.service'
import { Injectable, Logger } from '@nestjs/common'
import {
  BasePaginatedResponseDTO,
  PaginationInputDTO,
} from '@shared/dto/base.dto'
import {
  ExternalData,
  JsonData,
  RuntimeValidated,
  StructuredObject,
  SupabaseColumnValues,
  TableName,
} from '@shared/types'
import { applySearchWithFallback } from '@shared/utils/search-strategies.util'
import {
  isSupabaseResponse,
  validateAndExtract,
} from '@shared/utils/type-guards'

export interface PaginationOptions<T = Record<string, unknown>> {
  tableName: TableName
  selectFields?: string
  defaultSortBy?: keyof T | string
  defaultSortOrder?: 'ASC' | 'DESC'
  validSortFields?: string[]
  defaultFilters?: Record<string, unknown>
  maxLimit?: number
}

export interface FilterConfig {
  field: string
  operator:
    | 'eq'
    | 'neq'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'like'
    | 'ilike'
    | 'in'
    | 'contains'
  value: unknown
}

export interface SearchConfig {
  fields: string[]
  value: string
}

@Injectable()
export class PaginationService {
  private readonly logger = new Logger(PaginationService.name)

  constructor(private readonly databaseService: DatabaseService) {}

  /**
   * Hàm tiện ích pagination chung cho tất cả entity
   * Tạo hàm pagination tái sử dụng cho tất cả các API lấy dữ liệu
   */
  async paginate<T = Record<string, unknown>>(
    options: PaginationOptions<T>,
    paginationInput: PaginationInputDTO,
    filters?: FilterConfig[],
    search?: SearchConfig,
    customQueryBuilder?: (query: unknown) => unknown,
  ): Promise<BasePaginatedResponseDTO<T>> {
    const {
      tableName,
      selectFields = '*',
      defaultSortBy = 'created_at',
      defaultSortOrder = 'DESC',
      validSortFields = ['created_at', 'updated_at'],
      defaultFilters = {},
      maxLimit = 100,
    } = options

    this.logger.debug(
      `Thực hiện phân trang ${tableName} - trang: ${paginationInput.page}, giới hạn: ${paginationInput.limit}`,
      'PaginationService',
    )

    try {
      // Xác thực và làm sạch các tham số phân trang
      const validatedPage = Math.max(1, paginationInput.page || 1)
      const validatedLimit = Math.min(
        Math.max(1, paginationInput.limit || 10),
        maxLimit,
      )
      const offset = (validatedPage - 1) * validatedLimit

      // Xây dựng query cơ bản với đếm tổng số

      // Tạo query với type safety
      const client = this.databaseService.getClient()
      const baseQuery = client.from(tableName)

      // Tạo query với select và count
      let query = baseQuery.select(selectFields, { count: 'exact' })

      // Áp dụng filters mặc định
      Object.entries(defaultFilters).forEach(([field, value]) => {
        query = (query as any).eq(field, value)
      })

      // Áp dụng filters tùy chỉnh
      if (filters && filters.length > 0) {
        filters.forEach((filter) => {
          query = this.applyFilter(query, filter)
        })
      }

      // Áp dụng tìm kiếm với fallback strategies
      if (search && search.value && search.fields.length > 0) {
        // Sử dụng search strategy chain với multiple fallbacks
        query = applySearchWithFallback(query, search.fields, search.value)

        this.logger.debug(
          `Search applied cho fields: ${search.fields.join(', ')} với value: "${search.value}"`,
          'PaginationService',
        )
      }

      // Apply sorting
      const sortBy = paginationInput.sortBy || defaultSortBy
      const sortOrder = paginationInput.sortOrder || defaultSortOrder
      const safeSortBy = validSortFields.includes(sortBy as string)
        ? sortBy
        : defaultSortBy

      // Apply sorting
      query = query.order(safeSortBy as string, {
        ascending: sortOrder === 'ASC',
      })

      // Apply custom query modifications
      if (customQueryBuilder) {
        query = customQueryBuilder(query) as any
      }

      const paginatedQuery = query.range(offset, offset + validatedLimit - 1)

      // Execute query với validation
      const result = await paginatedQuery

      // Validate response structure
      const validatedResult = validateAndExtract(
        result,
        isSupabaseResponse<T>,
        'Response từ Supabase không đúng format',
      )

      const { data, error, count } = validatedResult as ExternalData<{
        data: RuntimeValidated[] | null
        error: StructuredObject<{ message?: string }> | null
        count: number | null
      }>

      if (error) {
        const err = error as StructuredObject<{ message?: string }>
        const errorMessage = err?.message || 'Unknown error'
        this.logger.error(
          `Pagination failed for ${tableName}: ${errorMessage}`,
          err,
          'PaginationService',
        )
        return this.createErrorResponse<T>(
          `Lỗi khi lấy dữ liệu từ ${tableName}: ${errorMessage}`,
        )
      }

      // Calculate pagination metadata
      const total = count || 0
      const totalPages = Math.ceil(total / validatedLimit)
      const hasNext = validatedPage < totalPages
      const hasPrevious = validatedPage > 1

      const message = search?.value
        ? `Tìm thấy ${data?.length || 0}/${total} kết quả cho "${search.value}"`
        : `Tìm thấy ${data?.length || 0}/${total} kết quả`

      this.logger.debug(
        `Pagination success for ${tableName}: ${data?.length} items returned`,
        'PaginationService',
      )

      return {
        success: true,
        message,
        data: (data as T[]) || [],
        pagination: {
          currentPage: validatedPage,
          limit: validatedLimit,
          total,
          totalPages,
          hasPrevious,
          hasNext,
        },
      }
    } catch (error) {
      this.logger.error(
        `Unexpected error in pagination for ${tableName}`,
        error as Error,
        'PaginationService',
      )
      return this.createErrorResponse<T>(
        `Lỗi không mong muốn khi lấy dữ liệu từ ${tableName}`,
      )
    }
  }

  /**
   * Helper method để apply các filter operators với type safety
   * @param query - Supabase query builder
   * @param filter - Filter configuration
   * @returns Type-safe query builder
   */
  private applyFilter(query: any, filter: FilterConfig): any {
    const { field, operator, value } = filter

    try {
      switch (operator) {
        case 'eq':
          return query.eq(field, value as JsonData)
        case 'neq':
          return query.neq(field, value as JsonData)
        case 'gt':
          return query.gt(field, value as number)
        case 'gte':
          return query.gte(field, value as number)
        case 'lt':
          return query.lt(field, value as number)
        case 'lte':
          return query.lte(field, value as number)
        case 'like':
          return query.like(field, value as string)
        case 'ilike':
          return query.ilike(field, `%${String(value)}%`)
        case 'in':
          return query.in(field, value as SupabaseColumnValues)
        case 'contains':
          return query.contains(field, value as SupabaseColumnValues)
        default:
          this.logger.warn(
            `Toán tử filter không xác định: ${String(operator)}. Sử dụng 'eq' làm mặc định.`,
            'PaginationService',
          )
          return query.eq(field, value as JsonData)
      }
    } catch (error) {
      this.logger.error(
        `Lỗi khi apply filter ${operator} cho field ${field}: ${error}`,
        'PaginationService',
      )
      throw new Error(`Không thể apply filter ${operator} cho field ${field}`)
    }
  }

  /**
   * Helper method to create error response
   */
  private createErrorResponse<T>(message: string): BasePaginatedResponseDTO<T> {
    return {
      success: false,
      message,
      data: [],
      pagination: {
        currentPage: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
        hasPrevious: false,
        hasNext: false,
      },
    }
  }

  /**
   * Helper method to build filters from input object
   */
  buildFiltersFromInput(filtersInput: Record<string, unknown>): FilterConfig[] {
    const filters: FilterConfig[] = []

    Object.entries(filtersInput).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        // Determine operator based on key naming convention
        if (key.endsWith('_like')) {
          filters.push({
            field: key.replace('_like', ''),
            operator: 'ilike',
            value,
          })
        } else if (key.endsWith('_in')) {
          filters.push({
            field: key.replace('_in', ''),
            operator: 'in',
            value,
          })
        } else if (key.endsWith('_contains')) {
          filters.push({
            field: key.replace('_contains', ''),
            operator: 'contains',
            value,
          })
        } else {
          // Default to equality
          filters.push({
            field: key,
            operator: 'eq',
            value,
          })
        }
      }
    })

    return filters
  }

  /**
   * Build search configuration from input
   */
  buildSearchFromInput(
    searchValue: string,
    searchFields: string[],
  ): SearchConfig | undefined {
    if (!searchValue || !searchFields.length) {
      return undefined
    }

    return {
      fields: searchFields,
      value: searchValue,
    }
  }
}
