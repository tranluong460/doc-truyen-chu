/**
 * Base DTO classes để tái sử dụng common patterns
 *
 * Tập trung tất cả base DTOs để tránh duplication
 * và đảm bảo consistency across toàn bộ ứng dụng
 */

import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsUserId } from '@shared/decorators/validation.decorators'

/**
 * Base Input DTO - chứa common fields cho tất cả inputs
 */
@InputType({ isAbstract: true })
export abstract class BaseInputDTO {
  // Base class để extend, không có fields cụ thể
}

/**
 * Base Response DTO - chứa common response structure
 */
@ObjectType({ isAbstract: true })
export abstract class BaseResponseDTO {
  @Field(() => Boolean, { description: 'Trạng thái thành công của operation' })
  success: boolean

  @Field(() => String, {
    nullable: true,
    description: 'Thông báo kết quả',
  })
  message?: string
}

/**
 * Base Entity Input - cho các operations cần ID
 */
@InputType({ isAbstract: true })
export abstract class BaseEntityInputDTO extends BaseInputDTO {
  @IsUserId('ID của entity')
  id: string
}

/**
 * Base Update Input - cho các update operations
 */
@InputType({ isAbstract: true })
export abstract class BaseUpdateInputDTO extends BaseEntityInputDTO {
  // Extend this class cho các update DTOs
}

/**
 * Base Delete Input - cho delete operations
 */
@InputType({ description: 'Input cho delete operations' })
export class BaseDeleteInputDTO extends BaseEntityInputDTO {
  // Chỉ cần ID để delete
}

/**
 * Generic Success Response
 */
@ObjectType({ description: 'Generic success response' })
export class SuccessResponseDTO extends BaseResponseDTO {
  @Field(() => Boolean, { defaultValue: true })
  success: boolean

  constructor(message?: string) {
    super()
    this.success = true
    this.message = message
  }
}

/**
 * Generic Error Response
 */
@ObjectType({ description: 'Generic error response' })
export class ErrorResponseDTO extends BaseResponseDTO {
  @Field(() => Boolean, { defaultValue: false })
  success: boolean

  @Field(() => String, { description: 'Chi tiết lỗi' })
  error: string

  @Field(() => String, {
    nullable: true,
    description: 'Error code để identify loại lỗi',
  })
  errorCode?: string

  constructor(error: string, errorCode?: string, message?: string) {
    super()
    this.success = false
    this.error = error
    this.errorCode = errorCode
    this.message = message
  }
}

/**
 * Enhanced Pagination Input DTO
 */
@InputType({ description: 'Enhanced pagination parameters with sorting' })
export class PaginationInputDTO extends BaseInputDTO {
  @Field(() => Number, {
    defaultValue: 1,
    description: 'Số trang (bắt đầu từ 1)',
  })
  page: number = 1

  @Field(() => Number, {
    defaultValue: 10,
    description: 'Số items per page (max 100)',
  })
  limit: number = 10

  @Field(() => String, {
    nullable: true,
    description: 'Search keyword',
  })
  search?: string

  @Field(() => String, {
    nullable: true,
    description: 'Field để sort (created_at, updated_at, name, email)',
  })
  sortBy?: string

  @Field(() => String, {
    nullable: true,
    description: 'Sort order: ASC hoặc DESC',
  })
  sortOrder?: 'ASC' | 'DESC'
}

/**
 * Pagination Info DTO
 */
@ObjectType({ description: 'Pagination metadata' })
export class PaginationInfoDTO {
  @Field(() => Number, { description: 'Trang hiện tại' })
  currentPage: number

  @Field(() => Number, { description: 'Số items per page' })
  limit: number

  @Field(() => Number, { description: 'Tổng số items' })
  total: number

  @Field(() => Number, { description: 'Tổng số trang' })
  totalPages: number

  @Field(() => Boolean, { description: 'Có trang trước không' })
  hasPrevious: boolean

  @Field(() => Boolean, { description: 'Có trang sau không' })
  hasNext: boolean

  constructor(page: number, limit: number, total: number) {
    this.currentPage = page
    this.limit = limit
    this.total = total
    this.totalPages = Math.ceil(total / limit)
    this.hasPrevious = page > 1
    this.hasNext = page < this.totalPages
  }
}

/**
 * Base Paginated Response Interface - for use in services
 */
export interface BasePaginatedResponseDTO<T> {
  success: boolean
  message?: string
  data: T[]
  pagination: {
    currentPage: number
    limit: number
    total: number
    totalPages: number
    hasPrevious: boolean
    hasNext: boolean
  }
}

/**
 * Generic Paginated Response
 */
@ObjectType({ isAbstract: true })
export abstract class PaginatedResponseDTO<T> extends BaseResponseDTO {
  @Field(() => PaginationInfoDTO, { description: 'Pagination metadata' })
  pagination: PaginationInfoDTO

  // Data sẽ được define ở child classes
  abstract data: T[]

  constructor(
    data: T[],
    page: number,
    limit: number,
    total: number,
    message?: string,
  ) {
    super()
    this.success = true
    this.message = message
    this.pagination = new PaginationInfoDTO(page, limit, total)
  }
}

/**
 * Bulk Operation Input
 */
@InputType({ description: 'Input cho bulk operations' })
export class BulkOperationInputDTO extends BaseInputDTO {
  @Field(() => [String], {
    description: 'Danh sách IDs để thực hiện operation',
  })
  ids: string[]

  @Field(() => String, {
    nullable: true,
    description: 'Lý do thực hiện bulk operation',
  })
  reason?: string
}

/**
 * Bulk Operation Response
 */
@ObjectType({ description: 'Response cho bulk operations' })
export class BulkOperationResponseDTO extends BaseResponseDTO {
  @Field(() => Number, { description: 'Số items được xử lý thành công' })
  successCount: number

  @Field(() => Number, { description: 'Số items bị failed' })
  failedCount: number

  @Field(() => [String], {
    nullable: true,
    description: 'Danh sách IDs thành công',
  })
  successIds?: string[]

  @Field(() => [String], {
    nullable: true,
    description: 'Danh sách IDs failed',
  })
  failedIds?: string[]

  constructor(
    successCount: number,
    failedCount: number,
    successIds?: string[],
    failedIds?: string[],
    message?: string,
  ) {
    super()
    this.success = failedCount === 0
    this.successCount = successCount
    this.failedCount = failedCount
    this.successIds = successIds
    this.failedIds = failedIds
    this.message =
      message || `${successCount} thành công, ${failedCount} thất bại`
  }
}
