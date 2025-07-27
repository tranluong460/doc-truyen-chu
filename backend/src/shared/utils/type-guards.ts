/**
 * Các type guards để kiểm tra kiểu dữ liệu runtime
 * Giúp giải quyết lỗi ESLint no-unsafe-call và no-unsafe-member-access
 */

import { Permission, Role } from '@shared/enums'
import {
  GenericError,
  ObjectMethod,
  SupabaseColumnValues,
  SupabaseFilterValue,
} from '@shared/types'

// ✅ Basic type guards
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value)
}

// ✅ Null/undefined checks
export function isNotNull<T>(value: T | null): value is T {
  return value !== null
}

export function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

// ✅ Complex object type guards
export function hasProperty<K extends string>(
  obj: unknown,
  property: K,
): obj is Record<K, unknown> {
  return isObject(obj) && property in obj
}

export function hasMethod<K extends string>(
  obj: unknown,
  methodName: K,
): obj is Record<K, ObjectMethod> {
  return hasProperty(obj, methodName) && typeof obj[methodName] === 'function'
}

// ✅ Supabase specific type guards
export interface SupabaseResponse<T> {
  data: T[] | null
  error: GenericError | null
  count?: number | null
}

export function isSupabaseResponse<T>(
  value: unknown,
): value is SupabaseResponse<T> {
  return (
    isObject(value) &&
    hasProperty(value, 'data') &&
    hasProperty(value, 'error') &&
    (value.data === null || isArray(value.data))
  )
}

export interface SupabaseQueryBuilder<T> {
  // Selection và counting
  select: (
    columns?: string,
    options?: { count?: 'exact' | 'planned' | 'estimated' },
  ) => SupabaseQueryBuilder<T>

  // Basic filtering
  eq: (column: string, value: SupabaseFilterValue) => SupabaseQueryBuilder<T>
  neq: (column: string, value: SupabaseFilterValue) => SupabaseQueryBuilder<T>
  gt: (column: string, value: number) => SupabaseQueryBuilder<T>
  gte: (column: string, value: number) => SupabaseQueryBuilder<T>
  lt: (column: string, value: number) => SupabaseQueryBuilder<T>
  lte: (column: string, value: number) => SupabaseQueryBuilder<T>

  // Text search
  like: (column: string, value: string) => SupabaseQueryBuilder<T>
  ilike: (column: string, value: string) => SupabaseQueryBuilder<T>

  // Array operations
  in: (column: string, values: SupabaseColumnValues) => SupabaseQueryBuilder<T>
  contains: (
    column: string,
    value: SupabaseColumnValues,
  ) => SupabaseQueryBuilder<T>

  // Logical operations
  or: (conditions: string) => SupabaseQueryBuilder<T>
  and: (conditions: string) => SupabaseQueryBuilder<T>
  not: (
    column: string,
    operator: string,
    value: SupabaseFilterValue,
  ) => SupabaseQueryBuilder<T>

  // NULL checks
  is: (column: string, value: null) => SupabaseQueryBuilder<T>

  // Sorting và pagination
  order: (
    column: string,
    options?: { ascending?: boolean },
  ) => SupabaseQueryBuilder<T>
  range: (from: number, to: number) => Promise<SupabaseResponse<T>>
  limit: (count: number) => SupabaseQueryBuilder<T>

  // Advanced operations
  single: () => Promise<SupabaseResponse<T>>
  maybeSingle: () => Promise<SupabaseResponse<T>>
}

export function isSupabaseQueryBuilder<T>(
  value: unknown,
): value is SupabaseQueryBuilder<T> {
  return (
    isObject(value) &&
    hasMethod(value, 'select') &&
    hasMethod(value, 'eq') &&
    hasMethod(value, 'or') &&
    hasMethod(value, 'range')
  )
}

// ✅ User-specific type guards
export interface IUser extends Record<string, unknown> {
  id: string
  email: string
  name: string | null
  address: string | null
  password: string
  role: Role
  permissions: Permission[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export function isUserObject(value: unknown): value is IUser {
  return (
    isObject(value) &&
    hasProperty(value, 'id') &&
    isString(value.id) &&
    hasProperty(value, 'email') &&
    isString(value.email) &&
    hasProperty(value, 'role') &&
    isString(value.role) &&
    hasProperty(value, 'permissions') &&
    isArray(value.permissions) &&
    hasProperty(value, 'is_active') &&
    isBoolean(value.is_active)
  )
}

export function isUserArray(value: unknown): value is IUser[] {
  return isArray(value) && value.every(isUserObject)
}

// ✅ Pagination-specific type guards
export interface PaginationMeta {
  currentPage: number
  limit: number
  total: number
  totalPages: number
  hasPrevious: boolean
  hasNext: boolean
}

export function isPaginationMeta(value: unknown): value is PaginationMeta {
  return (
    isObject(value) &&
    hasProperty(value, 'currentPage') &&
    isNumber(value.currentPage) &&
    hasProperty(value, 'limit') &&
    isNumber(value.limit) &&
    hasProperty(value, 'total') &&
    isNumber(value.total) &&
    hasProperty(value, 'totalPages') &&
    isNumber(value.totalPages) &&
    hasProperty(value, 'hasPrevious') &&
    isBoolean(value.hasPrevious) &&
    hasProperty(value, 'hasNext') &&
    isBoolean(value.hasNext)
  )
}

// ✅ Error type guards
export interface ApiError {
  message: string
  code?: string
  status?: number
}

export function isApiError(value: unknown): value is ApiError {
  return (
    isObject(value) && hasProperty(value, 'message') && isString(value.message)
  )
}

export function isErrorWithMessage(
  value: unknown,
): value is { message: string } {
  return (
    isObject(value) && hasProperty(value, 'message') && isString(value.message)
  )
}

// ✅ Generic validation helpers
export function validateAndExtract<T>(
  value: unknown,
  guard: (val: unknown) => val is T,
  errorMessage: string,
): T {
  if (!guard(value)) {
    throw new Error(errorMessage)
  }
  return value
}

export function safeAccess<T, K extends keyof T>(
  obj: unknown,
  key: K,
  guard: (val: unknown) => val is T,
): T[K] | undefined {
  if (!guard(obj)) {
    return undefined
  }
  return obj[key]
}
