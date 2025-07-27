import { Permission } from '@shared/enums/permission.enum'
import { Role } from '@shared/enums/role.enum'

/**
 * Ma trận phân quyền cho từng role trong hệ thống
 *
 * Hệ thống sử dụng kết hợp Role-Based và Permission-Based Access Control:
 * - Mỗi role có một set permissions mặc định
 * - User có thể được cấp thêm permissions riêng (ngoài role permissions)
 * - Permissions cuối cùng = Role Permissions ∪ Individual Permissions
 *
 * Hierarchy (từ cao xuống thấp): ADMIN > MANAGER > STAFF > USER > GUEST
 *
 * 🔴 ADMIN (28 perms): System admin - toàn quyền
 * 🟡 MANAGER (8 perms): User management + operations
 * 🟢 STAFF (3 perms): Basic user operations
 * 🔵 USER (3 perms): Personal account management
 * ⚪ GUEST (0 perms): Public access only
 */
export const ROLE_PERMISSIONS_MAP: Record<Role, Permission[]> = {
  // 🔴 ADMIN: Toàn quyền hệ thống (28 permissions)
  // Có tất cả permissions để quản lý users, roles, permissions và system
  [Role.ADMIN]: Object.values(Permission),

  // 🟡 MANAGER: Quản lý users và operations (8 permissions)
  // Có thể CRUD users, xem roles/permissions nhưng không thể thay đổi system config
  // Không có ADMIN_UPDATE_PASSWORD - không thể reset password mà không biết password cũ
  [Role.MANAGER]: [
    Permission.READ_USER, // Đọc thông tin user
    Permission.UPDATE_USER_INFO, // Sửa profile users
    Permission.UPDATE_USER_PASSWORD, // Đổi password (cần password cũ)
    Permission.VIEW_ALL_USERS, // Xem danh sách tất cả users
    Permission.CREATE_USER, // Tạo user mới
    Permission.VIEW_ROLES, // Xem danh sách roles
    Permission.VIEW_PERMISSIONS, // Xem danh sách permissions
    Permission.DELETE_USER, // Xóa users (soft delete)
  ],

  // 🟢 STAFF: Nhân viên vận hành (3 permissions)
  // Có thể xem và sửa thông tin users nhưng không thể tạo/xóa
  // Không thể đổi password cho users khác
  [Role.STAFF]: [
    Permission.READ_USER, // Đọc thông tin user
    Permission.UPDATE_USER_INFO, // Sửa profile users
    Permission.VIEW_ALL_USERS, // Xem danh sách tất cả users
  ],

  // 🔵 USER: Người dùng thông thường (3 permissions)
  // Chỉ có thể quản lý thông tin cá nhân của mình
  // Không thể xem hoặc tác động đến users khác
  [Role.USER]: [
    Permission.READ_USER, // Đọc thông tin của chính mình
    Permission.UPDATE_USER_INFO, // Sửa profile của chính mình
    Permission.UPDATE_USER_PASSWORD, // Đổi password của chính mình
  ],

  // ⚪ GUEST: Khách truy cập (0 permissions)
  // Chỉ có thể truy cập các API public (@Public() decorator)
  // Thường dùng cho preview hoặc demo mode
  [Role.GUEST]: [],
}

/**
 * Lấy danh sách permissions mặc định cho một role
 *
 * Function này được sử dụng trong PermissionsGuard để:
 * 1. Lấy permissions từ role của user
 * 2. Kết hợp với permissions riêng được cấp cho user
 * 3. Tạo ra final permission set để kiểm tra authorization
 *
 * @param role - Role enum cần lấy permissions
 * @returns Permission[] - Mảng permissions cho role đó, hoặc [] nếu role không tồn tại
 *
 * @example
 * ```typescript
 * const adminPerms = getRolePermissions(Role.ADMIN);    // [28 permissions]
 * const userPerms = getRolePermissions(Role.USER);      // [3 permissions]
 * const guestPerms = getRolePermissions(Role.GUEST);    // []
 * ```
 */
export const getRolePermissions = (role: Role): Permission[] => {
  return ROLE_PERMISSIONS_MAP[role] || []
}
