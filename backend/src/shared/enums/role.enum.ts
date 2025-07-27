import { registerEnumType } from '@nestjs/graphql'

export enum Role {
  // ===== VAI TRÒ QUẢN TRỊ =====
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',

  // ===== VAI TRÒ VẬN HÀNH =====
  STAFF = 'STAFF',
  USER = 'USER',

  // ===== VAI TRÒ KHÁCH =====
  GUEST = 'GUEST',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Danh sách các vai trò trong hệ thống',
})
