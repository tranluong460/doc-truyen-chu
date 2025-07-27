/**
 * Safe operations cho Supabase query builder
 * Xử lý trường hợp methods có thể không tồn tại
 */

import { Logger } from '@nestjs/common'
import { SupabaseMethodArgs, SupabaseMethodResult } from '@shared/types'
import { SupabaseQueryBuilder, hasMethod } from '@shared/utils/type-guards'
import { isObject } from 'node:util'

const logger = new Logger('SupabaseSafeOperations')

// ✅ Safe method invocation cho Supabase query builder
export function safeQueryMethod<T>(
  query: unknown,
  methodName: keyof SupabaseQueryBuilder<T>,
  ...args: SupabaseMethodArgs
): SupabaseQueryBuilder<T> | null {
  if (!isObject(query) || !hasMethod(query, methodName)) {
    logger.warn(`Method ${String(methodName)} không tồn tại trên query builder`)
    return null
  }

  try {
    const result = (query as SupabaseMethodResult)[methodName](
      ...args,
    ) as SupabaseQueryBuilder<T>
    return result
  } catch (error) {
    logger.error(`Lỗi khi gọi method ${String(methodName)}: ${error}`)
    return null
  }
}
