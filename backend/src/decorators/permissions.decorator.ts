import { SetMetadata } from '@nestjs/common'
import { Permission } from '@shared/enums/permission.enum'

/**
 * Metadata key để PermissionsGuard đọc permissions requirements
 */
export const PERMISSIONS_KEY = 'permissions'

/**
 * Decorator xác định permissions cần thiết để truy cập một resolver/endpoint
 *
 * Decorator này được PermissionsGuard sử dụng để kiểm tra quyền truy cập.
 * Nó hoạt động theo logic OR - user chỉ cần có ít nhất 1 trong các permissions được yêu cầu.
 *
 * @param permissions - Danh sách các Permission enums cần thiết
 *
 * @example
 * ```typescript
 * * Yêu cầu quyền CREATE_USER
 * @Permissions(Permission.CREATE_USER)
 * @Mutation(() => User)
 * createUser() { ... }
 *
 * * Yêu cầu một trong hai quyền VIEW_ALL_USERS hoặc MANAGE_USERS
 * @Permissions(Permission.VIEW_ALL_USERS, Permission.MANAGE_USERS)
 * @Query(() => [User])
 * findAllUsers() { ... }
 *
 * * Kết hợp với @Roles() để kiểm tra cả role và permission
 * @Roles(Role.ADMIN, Role.MANAGER)
 * @Permissions(Permission.DELETE_USER)
 * @Mutation(() => User)
 * deleteUser() { ... }
 * ```
 *
 * @see PermissionsGuard.canActivate() - nơi decorator này được xử lý
 * @see Permission enum - danh sách tất cả permissions có sẵn
 */
export const Permissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions)
