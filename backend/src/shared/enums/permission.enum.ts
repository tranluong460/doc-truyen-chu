import { registerEnumType } from '@nestjs/graphql'

export enum Permission {
  // ===== QUYỀN QUẢN LÝ NGƯỜI DÙNG =====
  CREATE_USER = 'CREATE_USER',
  READ_USER = 'READ_USER',
  UPDATE_USER_INFO = 'UPDATE_USER_INFO',
  UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD',
  DELETE_USER = 'DELETE_USER',
  VIEW_ALL_USERS = 'VIEW_ALL_USERS',
  MANAGE_USERS = 'MANAGE_USERS',
  ADMIN_UPDATE_PASSWORD = 'ADMIN_UPDATE_PASSWORD',

  // ===== QUYỀN QUẢN LÝ VAI TRÒ =====
  ASSIGN_ROLE = 'ASSIGN_ROLE',
  REMOVE_ROLE = 'REMOVE_ROLE',
  VIEW_ROLES = 'VIEW_ROLES',

  // ===== QUYỀN QUẢN LÝ PHÂN QUYỀN =====
  ASSIGN_PERMISSION = 'ASSIGN_PERMISSION',
  REMOVE_PERMISSION = 'REMOVE_PERMISSION',
  VIEW_PERMISSIONS = 'VIEW_PERMISSIONS',

  // ===== QUYỀN QUẢN TRỊ HỆ THỐNG =====
  SYSTEM_CONFIG = 'SYSTEM_CONFIG',
  VIEW_LOGS = 'VIEW_LOGS',
  BACKUP_RESTORE = 'BACKUP_RESTORE',
}

registerEnumType(Permission, {
  name: 'Permission',
  description: 'Danh sách các quyền trong hệ thống',
})
