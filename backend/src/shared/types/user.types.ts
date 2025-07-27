/**
 * Consolidated User type definitions
 *
 * Single source of truth cho tất cả User-related types
 * để tránh duplication và đảm bảo consistency
 */

import { Permission, Role } from '@shared/enums'
import { IUser } from '@shared/utils'

/**
 * Public User interface - không có password và internal fields
 * Dùng cho GraphQL responses và client-side
 */
export interface IPublicUser {
  id: string
  name: string | null
  address: string | null
  email: string
  permissions: Permission[]
  role: Role
  is_active: boolean
  created_at: string
  updated_at: string
}

/**
 * User for Authentication - minimal fields cho JWT payload
 */
export interface IAuthUser {
  id: string
  email: string
  name: string | null
  role: Role
  permissions: Permission[]
}

/**
 * Database User type - cho Supabase operations
 */
export type DatabaseUser = IUser

/**
 * User creation data - không có id và timestamps
 */
export interface ICreateUser {
  name: string | null
  address: string | null
  email: string
  password: string
  role: Role
  permissions?: Permission[]
}

/**
 * User update data - partial fields trừ id
 */
export interface IUpdateUser {
  name?: string | null
  address?: string | null
  email?: string
  role?: Role
  permissions?: Permission[]
}

/**
 * Password update data
 */
export interface IUpdateUserPassword {
  current_password: string
  new_password: string
}

/**
 * Admin password update data
 */
export interface IAdminUpdateUserPassword {
  userId: string
  new_password: string
}

/**
 * User filter options cho queries
 */
export interface IUserFilters {
  role?: Role
  is_active?: boolean
  permissions?: Permission[]
  email?: string
  name?: string
}

/**
 * User sort options
 */
export interface IUserSort {
  field: 'name' | 'email' | 'created_at' | 'updated_at'
  order: 'ASC' | 'DESC'
}

/**
 * Paginated user results
 */
export interface IPaginatedUsers {
  users: IPublicUser[]
  total: number
  page: number
  limit: number
  totalPages: number
}
