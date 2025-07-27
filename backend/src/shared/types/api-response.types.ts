/**
 * API Response Types & Utility Types
 *
 * Tập trung tất cả các type liên quan đến API response và utility types
 * để tái sử dụng xuyên suốt toàn bộ ứng dụng backend
 *
 * @fileoverview Định nghĩa các type chuẩn cho API responses, pagination,
 * filtering và các operations CRUD cơ bản trong hệ thống
 *
 * @author Core Project Team
 * @since 1.0.0
 */

import { Permission, Role } from '@shared/enums'

// ==================== API RESPONSE TYPES ====================

/**
 * Cấu trúc chuẩn cho tất cả API responses trong hệ thống
 *
 * @template T - Kiểu dữ liệu của response data
 *
 * @example
 * ```typescript
 * // Success response với user data
 * const response: ApiResponse<IUser> = {
 *   success: true,
 *   data: user,
 *   message: "Lấy thông tin user thành công"
 * }
 *
 * // Error response
 * const errorResponse: ApiResponse<never> = {
 *   success: false,
 *   error: "Không tìm thấy user",
 *   errorCode: "USER_NOT_FOUND"
 * }
 * ```
 */
export interface ApiResponse<T = unknown> {
  /** Trạng thái thành công của request */
  success: boolean
  /** Dữ liệu trả về (chỉ có khi success = true) */
  data?: T
  /** Thông báo mô tả kết quả (tiếng Việt) */
  message?: string
  /** Thông báo lỗi (tiếng Việt, chỉ có khi success = false) */
  error?: string
  /** Mã lỗi chuẩn để client xử lý (UPPER_SNAKE_CASE) */
  errorCode?: string
}

/**
 * Type chuẩn cho Success Response (khi API call thành công)
 *
 * @template T - Kiểu dữ liệu được trả về
 *
 * @example
 * ```typescript
 * const createUserResponse: SuccessResponse<IUser> = {
 *   success: true,
 *   data: newUser,
 *   message: "Tạo user thành công"
 * }
 * ```
 */
export interface SuccessResponse<T = unknown> extends ApiResponse<T> {
  /** Luôn true cho success response */
  success: true
  /** Dữ liệu bắt buộc phải có cho success response */
  data: T
}

/**
 * Type chuẩn cho Error Response (khi API call thất bại)
 *
 * @example
 * ```typescript
 * const errorResponse: ErrorResponse = {
 *   success: false,
 *   error: "Email đã tồn tại trong hệ thống",
 *   errorCode: "EMAIL_ALREADY_EXISTS"
 * }
 * ```
 */
export interface ErrorResponse extends ApiResponse<never> {
  /** Luôn false cho error response */
  success: false
  /** Thông báo lỗi bắt buộc cho error response */
  error: string
  /** Mã lỗi để client xử lý logic cụ thể */
  errorCode?: string
}

// ==================== PAGINATION TYPES ====================

/**
 * Tham số query chuẩn cho pagination requests
 *
 * @example
 * ```typescript
 * // GraphQL query với pagination
 * const query: PaginationQuery = {
 *   page: 2,
 *   limit: 10,
 *   search: "admin",
 *   sortBy: "created_at",
 *   sortOrder: "DESC"
 * }
 * ```
 */
export interface PaginationQuery {
  /** Số trang (bắt đầu từ 1) */
  page?: number
  /** Số items per page (max 100) */
  limit?: number
  /** Từ khóa tìm kiếm */
  search?: string
  /** Field để sort */
  sortBy?: string
  /** Chiều sort (ASC: tăng dần, DESC: giảm dần) */
  sortOrder?: 'ASC' | 'DESC'
}

/**
 * Cấu trúc chuẩn cho pagination response
 *
 * @template T - Kiểu dữ liệu của items trong danh sách
 *
 * @example
 * ```typescript
 * const usersList: PaginationResult<IUser> = {
 *   data: [user1, user2, user3],
 *   pagination: {
 *     currentPage: 1,
 *     limit: 10,
 *     total: 50,
 *     totalPages: 5,
 *     hasPrevious: false,
 *     hasNext: true
 *   }
 * }
 * ```
 */
export interface PaginationResult<T> {
  /** Danh sách items của trang hiện tại */
  data: T[]
  /** Metadata về pagination */
  pagination: {
    /** Trang hiện tại */
    currentPage: number
    /** Số items per page */
    limit: number
    /** Tổng số items */
    total: number
    /** Tổng số trang */
    totalPages: number
    /** Có trang trước không */
    hasPrevious: boolean
    /** Có trang sau không */
    hasNext: boolean
  }
}

// ==================== FILTER & SEARCH TYPES ====================

/**
 * Options cho việc filter dữ liệu
 *
 * @template T - Kiểu dữ liệu của entity cần filter
 *
 * @example
 * ```typescript
 * const userFilters: FilterOptions<IUser> = {
 *   where: { is_active: true, role: Role.USER },
 *   orderBy: [{ field: 'created_at', direction: 'DESC' }],
 *   limit: 20
 * }
 * ```
 */
export interface FilterOptions<T = unknown> {
  /** Điều kiện where clause */
  where?: Partial<T>
  /** Cách sắp xếp kết quả */
  orderBy?: {
    field: keyof T
    direction: 'ASC' | 'DESC'
  }[]
  /** Giới hạn số kết quả */
  limit?: number
  /** Offset để skip records */
  offset?: number
}

/**
 * Options cho search functionality
 *
 * @example
 * ```typescript
 * const searchConfig: SearchOptions = {
 *   query: "admin user",
 *   fields: ["email", "name"],
 *   caseSensitive: false,
 *   exactMatch: false
 * }
 * ```
 */
export interface SearchOptions {
  /** Từ khóa search */
  query: string
  /** Các fields để search */
  fields: string[]
  /** Có phân biệt hoa thường không */
  caseSensitive?: boolean
  /** Search exact match hay partial */
  exactMatch?: boolean
}

/**
 * Options cho sort functionality
 *
 * @template T - Kiểu dữ liệu của entity
 */
export interface SortOptions<T = unknown> {
  /** Field để sort */
  field: keyof T
  /** Thứ tự sort */
  order: 'ASC' | 'DESC'
}

// ==================== CRUD OPERATIONS TYPES ====================

/**
 * Interface chuẩn cho các CRUD operations
 *
 * @template T - Entity type
 * @template CreateDTO - DTO cho create operation
 * @template UpdateDTO - DTO cho update operation
 *
 * @example
 * ```typescript
 * class UserService implements CrudOperations<IUser, CreateUserInput, UpdateUserInput> {
 *   async create(data: CreateUserInput): Promise<IUser> { ... }
 *   async findAll(filters?: FilterOptions<IUser>): Promise<IUser[]> { ... }
 *   // ... other methods
 * }
 * ```
 */
export interface CrudOperations<T, CreateDTO, UpdateDTO> {
  /** Tạo entity mới */
  create(data: CreateDTO): Promise<T>
  /** Lấy tất cả entities với filters */
  findAll(filters?: FilterOptions<T>): Promise<T[]>
  /** Tìm entity theo ID */
  findOne(id: string): Promise<T | null>
  /** Cập nhật entity */
  update(id: string, data: UpdateDTO): Promise<T>
  /** Xóa entity (soft delete) */
  delete(id: string): Promise<boolean>
}

// ==================== UTILITY TYPES ====================

/**
 * Service response wrapper
 * Dùng để wrap response từ services
 */
export type ServiceResponse<T> = Promise<ApiResponse<T>>

/**
 * Entity với timestamps chuẩn
 */
export interface WithTimestamps {
  /** Thời gian tạo (ISO string) */
  created_at: string
  /** Thời gian cập nhật cuối (ISO string) */
  updated_at: string
}

/**
 * Entity với soft delete capability
 */
export interface WithSoftDelete {
  /** Trạng thái active (false = đã xóa) */
  is_active: boolean
  /** Thời gian xóa (optional) */
  deleted_at?: string
}

/**
 * Base entity interface với các fields cơ bản
 */
export interface BaseDbEntity extends WithTimestamps, WithSoftDelete {
  /** UUID của entity */
  id: string
}

/**
 * Audit fields để track changes
 */
export interface WithAudit {
  /** User ID của người tạo */
  created_by?: string
  /** User ID của người cập nhật cuối */
  updated_by?: string
  /** Version của entity (optimistic locking) */
  version?: number
}

/**
 * Validation result cho form validation
 */
export interface ValidationResult {
  /** Có valid không */
  isValid: boolean
  /** Danh sách lỗi validation */
  errors: Array<{
    /** Field bị lỗi */
    field: string
    /** Thông báo lỗi (tiếng Việt) */
    message: string
    /** Mã lỗi (optional) */
    code?: string
  }>
}

/**
 * Generic database query options
 */
export interface QueryOptions<T = unknown> {
  /** Các fields cần select */
  select?: (keyof T)[]
  /** Điều kiện where */
  where?: Partial<T>
  /** Sort options */
  orderBy?: SortOptions<T>[]
  /** Limit results */
  limit?: number
  /** Skip results */
  offset?: number
  /** Include relations */
  relations?: string[]
}

/**
 * Permission check structure
 */
export interface PermissionCheck {
  /** ID của user cần check */
  userId: string
  /** Resource đang access */
  resource: string
  /** Action đang thực hiện */
  action: string
  /** Permissions bắt buộc */
  requiredPermissions: Permission[]
  /** Roles bắt buộc (optional) */
  requiredRoles?: Role[]
}

/**
 * Key-Value pair generic
 */
export interface KeyValuePair<K = string, V = unknown> {
  key: K
  value: V
}

/**
 * Select option cho dropdowns/selects
 */
export interface SelectOption<T = string> {
  /** Label hiển thị */
  label: string
  /** Giá trị */
  value: T
  /** Có disabled không */
  disabled?: boolean
  /** Nhóm (optional) */
  group?: string
}

// ==================== ADVANCED UTILITY TYPES ====================

/**
 * Make tất cả properties optional trừ những cái specified
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

/**
 * Make specified properties required
 */
export type RequireOnly<T, K extends keyof T> = Partial<T> &
  Required<Pick<T, K>>

/**
 * Exclude null từ type
 */
export type NonNull<T> = T extends null ? never : T

/**
 * Make nested properties optional
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * Safe function wrapper với error handling
 */
export type SafeFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promise<ApiResponse<Awaited<ReturnType<T>>>>
