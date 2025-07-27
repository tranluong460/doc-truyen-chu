/**
 * Search utility cho Supabase query builder với fallback strategy
 */

import { Logger } from '@nestjs/common'
import { safeQueryMethod } from '@shared/utils/supabase-safe-operations.util'

const logger = new Logger('SearchStrategies')

/**
 * Apply search với fallback strategy pattern
 * Tries OR operation first, falls back to single field search, then returns original query
 */
export function applySearchWithFallback<T>(
  query: T,
  searchFields: string[],
  searchValue: string,
): T {
  if (!searchValue || searchFields.length === 0) {
    return query
  }

  // Strategy 1: Try OR operation (preferred)
  try {
    const conditions = searchFields
      .map((field) => `${field}.ilike.%${searchValue}%`)
      .join(',')

    const orResult = safeQueryMethod(query, 'or', conditions)
    if (orResult) {
      logger.debug(`OR search applied với conditions: ${conditions}`)
      return orResult as unknown as T
    }
  } catch (error) {
    logger.debug(`OR search thất bại: ${error}`)
  }

  // Strategy 2: Fallback to single field search
  try {
    const firstField = searchFields[0]
    const singleResult = safeQueryMethod(
      query,
      'ilike',
      firstField,
      `%${searchValue}%`,
    )

    if (singleResult) {
      logger.debug(`Single field search applied cho field: ${firstField}`)
      return singleResult as unknown as T
    }
  } catch (error) {
    logger.debug(`Single field search thất bại: ${error}`)
  }

  // Strategy 3: Return original query (ultimate fallback)
  logger.warn(
    `Không thể apply search cho "${searchValue}" trên fields: ${searchFields.join(', ')}. Trả về query gốc.`,
  )
  return query
}
