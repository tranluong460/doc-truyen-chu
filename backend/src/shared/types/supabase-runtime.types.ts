/**
 * Supabase Runtime Types - Type Definitions for Runtime Operations
 *
 * Tập trung tất cả các type liên quan đến Supabase runtime operations
 * và các type thay thế cho 'any' trong việc xử lý dynamic data
 *
 * @fileoverview Định nghĩa các type an toàn để thay thế 'any' trong việc xử lý
 * Supabase query operations, HTTP context, error handling và runtime validation
 *
 * @author Core Project Team
 * @since 1.0.0
 *
 * @important Tất cả types trong file này được thiết kế để thay thế việc sử dụng
 * 'any' type trực tiếp, nhằm duy trì type safety trong khi vẫn cho phép flexibility
 * khi xử lý dynamic data từ external sources
 */

// ==================== SUPABASE QUERY BUILDER TYPES ====================

/**
 * Arguments cho Supabase QueryBuilder method calls
 *
 * Sử dụng khi cần pass parameters linh hoạt cho các Supabase query methods
 * mà không biết trước chính xác structure của arguments
 *
 * @example
 * ```typescript
 * // Khi gọi method động trên query builder
 * const args: SupabaseMethodArgs = ['email', 'admin@example.com']
 * const result = query.eq(...args)
 * ```
 */
export type SupabaseMethodArgs = unknown[]

/**
 * Return type từ Supabase QueryBuilder method calls
 *
 * Đại diện cho query builder object sau khi gọi một method,
 * với cấu trúc có method chaining capabilities
 *
 * @example
 * ```typescript
 * // Query builder sau khi chain methods
 * const result: SupabaseMethodResult = query.select('*').eq('id', userId)
 * ```
 */
export type SupabaseMethodResult = StructuredObject<{
  [methodName: string]: FlexibleFunction
}>

/**
 * Supabase Client instance với dynamic API surface
 *
 * Đại diện cho Supabase client object với các methods động
 * để access tables và perform database operations
 *
 * @example
 * ```typescript
 * const client: SupabaseClientInstance = createClient(url, key)
 * const query = client.from('users')
 * ```
 */
export type SupabaseClientInstance = StructuredObject<{
  from: FlexibleFunction<SupabaseMethodResult>
  [key: string]: FlexibleFunction
}>

/**
 * Supabase Query filter values
 * Mixed primitive và complex values cho filtering
 */
export type SupabaseFilterValue = JsonData

/**
 * Supabase Query column values array
 * Array values cho IN và CONTAINS operations
 */
export type SupabaseColumnValues = JsonData[]

// ==================== HTTP/CONTEXT TYPES ====================

/**
 * HTTP Request/Response context data
 * Express/GraphQL context với dynamic properties
 */
export type HttpInterceptorContext = StructuredObject

// ==================== ERROR HANDLING TYPES ====================

/**
 * Generic error object
 * Standardized error structure từ multiple sources
 */
export type GenericError = StructuredObject<{
  message: string
  code: string | number
  stack: string
  [key: string]: JsonData
}>

// ==================== METHOD INVOCATION TYPES ====================

/**
 * Object method reference
 * Dynamic method access pattern
 */
export type ObjectMethod = FlexibleFunction

// ==================== TEMPLATE LITERAL TYPES ====================

/**
 * Template literal expression value
 * Log messages với dynamic values
 */
export type TemplateLiteralValue = JsonData

// ==================== CUSTOM REPLACEMENT TYPES ====================

/**
 * Unknown data với validation tại runtime
 * Thay thế cho 'any' khi cần type checking sau
 */
export type RuntimeValidated<T = unknown> = T

/**
 * External data chưa được validate
 * Thay thế cho 'any' với data từ API/database
 */
export type ExternalData<T = unknown> = T

/**
 * Object với known structure pattern
 */
export type StructuredObject<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T

// ==================== UTILITY TYPES ====================

/**
 * Function với flexible parameters
 */
export type FlexibleFunction<TReturn = unknown> = (
  ...args: unknown[]
) => TReturn

/**
 * JSON-serializable data
 */
export type JsonData =
  | string
  | number
  | boolean
  | null
  | JsonData[]
  | { [key: string]: JsonData }
