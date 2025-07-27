import { PERMISSIONS_KEY } from '@decorators/permissions.decorator'
import { IS_PUBLIC_KEY } from '@decorators/public.decorator'
import { ROLES_KEY } from '@decorators/roles.decorator'
import { UserService } from '@modules/user/user.service'
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { getRolePermissions } from '@shared/constants'
import { Permission, Role } from '@shared/enums'
import { LoggerService } from '@shared/services'
import { TokenValidationService } from '@shared/services/token-validation.service'
import { CustomGqlContext, CustomJwtPayload } from '@shared/types/jwt.types'

/**
 * Guard xử lý phân quyền cho tất cả GraphQL resolvers và API endpoints
 *
 * Đây là "tường lửa" chính của hệ thống, kiểm tra mọi request trước khi cho phép truy cập.
 *
 * Workflow:
 * 1. Kiểm tra endpoint có @Public() decorator không
 * 2. Trích xuất và validate JWT access token
 * 3. Lấy permissions yêu cầu từ @Permissions() và @Roles() decorators
 * 4. Query database để lấy user role và permissions hiện tại
 * 5. Kết hợp permissions từ role + permissions riêng của user
 * 6. So sánh với requirements và cho phép/từ chối truy cập
 * 7. Gắn user info vào request context cho các resolvers sử dụng
 *
 * Security Features:
 * - JWT token validation
 * - Role-based + Permission-based access control
 * - Real-time permission checking từ database
 * - Comprehensive audit logging
 * - Performance tracking
 *
 * @author Backend Team
 * @since 1.0.0
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
    private tokenValidationService: TokenValidationService,
    private logger: LoggerService,
  ) {}

  /**
   * Main authorization method - kiểm tra quyền truy cập cho mỗi GraphQL request
   *
   * Chi tiết flow:
   * 1. **Public Check**: Bỏ qua authorization nếu có @Public() decorator
   * 2. **Token Extraction**: Lấy JWT token từ Authorization header
   * 3. **Token Validation**: Verify token signature, expiration, và type
   * 4. **Permission Requirements**: Đọc @Permissions() và @Roles() từ resolver
   * 5. **Database Lookup**: Query user's current role và permissions
   * 6. **Permission Calculation**: Kết hợp role permissions + individual permissions
   * 7. **Access Decision**: So sánh requirements vs actual permissions
   * 8. **Context Injection**: Gắn user info vào request để resolvers dùng
   *
   * @param context - ExecutionContext từ NestJS (chứa GraphQL context)
   * @returns Promise<boolean> - true nếu cho phép truy cập, false hoặc throw exception nếu từ chối
   *
   * @throws UnauthorizedException - Khi không có token hoặc token không hợp lệ
   * @throws ForbiddenException - Khi user không đủ quyền truy cập
   *
   * @example
   * ```typescript
   * * Resolver với permissions
   * @Permissions(Permission.CREATE_USER)
   * @Mutation(() => User)
   * createUser() {
   *   // Guard sẽ kiểm tra user có Permission.CREATE_USER không
   *   // Nếu có thì method này được thực thi
   * }
   * ```
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const startTime = Date.now()

    try {
      // Kiểm tra endpoint có phải public không
      const isPublic = this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [context.getHandler(), context.getClass()],
      )

      if (isPublic === true) {
        this.logger.debug('Truy cập endpoint công khai', 'PermissionsGuard')
        return true
      }

      // Lấy các quyền và vai trò yêu cầu từ decorator
      const requiredPermissions = this.reflector.getAllAndOverride<
        Permission[]
      >(PERMISSIONS_KEY, [context.getHandler(), context.getClass()])

      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      )

      // Lấy context và request của GraphQL
      const ctx = GqlExecutionContext.create(context)
      const request = ctx.getContext<CustomGqlContext>().req

      // Lấy và kiểm tra JWT token
      const token = this.tokenValidationService.extractTokenFromHeader(
        request.headers.authorization,
      )
      if (!token) {
        this.logger.warn('Từ chối truy cập: Không có token', 'PermissionsGuard')
        throw new UnauthorizedException(
          'Bạn cần đăng nhập để thực hiện thao tác này',
        )
      }

      const payload: CustomJwtPayload =
        this.tokenValidationService.validateToken(token)
      const userId = payload.sub

      this.logger.debug(`Token hợp lệ cho user: ${userId}`, 'PermissionsGuard')

      // Lấy thông tin role và permission của user từ DB
      const userRole = await this.userService.findUserRole(userId)
      const userPermissions = await this.userService.findUserPermission(userId)

      if (!userRole) {
        this.logger.debug(
          `Không tìm thấy vai trò user: ${userId}`,
          'PermissionsGuard',
        )
        throw new ForbiddenException('Không tìm thấy vai trò của người dùng')
      }

      this.logger.debug(
        `User ${userId} có vai trò: ${userRole}, quyền: ${userPermissions?.length || 0}`,
        'PermissionsGuard',
      )

      // Kết hợp quyền từ role và quyền riêng của user
      const rolePermissions = getRolePermissions(userRole)
      const allUserPermissions = [
        ...new Set([...(userPermissions || []), ...rolePermissions]),
      ]

      // Kiểm tra các quyền yêu cầu
      if (requiredPermissions?.length > 0) {
        const missingPermissions = requiredPermissions.filter(
          (permission) => !allUserPermissions.includes(permission),
        )

        if (missingPermissions.length > 0) {
          this.logger.warn(
            `Từ chối truy cập user ${userId}: thiếu quyền [${missingPermissions.join(', ')}]`,
            'PermissionsGuard',
          )
          throw new ForbiddenException(
            `Bạn không đủ quyền. Thiếu: ${missingPermissions.join(', ')}`,
          )
        }

        this.logger.debug(
          `Kiểm tra quyền thành công cho user ${userId}: [${requiredPermissions.join(', ')}]`,
          'PermissionsGuard',
        )
      }

      // Kiểm tra các vai trò yêu cầu
      if (requiredRoles?.length > 0) {
        if (!requiredRoles.includes(userRole)) {
          this.logger.warn(
            `Từ chối truy cập user ${userId}: vai trò ${userRole} không nằm trong yêu cầu [${requiredRoles.join(', ')}]`,
            'PermissionsGuard',
          )
          throw new ForbiddenException(
            `Bạn không có vai trò phù hợp. Yêu cầu: ${requiredRoles.join(', ')}, Hiện tại: ${userRole}`,
          )
        }

        this.logger.debug(
          `Kiểm tra vai trò thành công cho user ${userId}: ${userRole}`,
          'PermissionsGuard',
        )
      }

      // Gắn thông tin user vào request
      request.userId = userId
      request.user = {
        id: userId,
        email: payload.email,
        role: payload.role,
        permissions: payload.permissions,
      }

      const duration = Date.now() - startTime
      this.logger.debug(
        `Cho phép truy cập user ${userId} (${userRole}) - ${duration}ms`,
        'PermissionsGuard',
      )
      return true
    } catch (error) {
      const duration = Date.now() - startTime

      if (
        error instanceof UnauthorizedException ||
        error instanceof ForbiddenException
      ) {
        this.logger.warn(
          `Từ chối truy cập (${error.constructor.name}): ${error.message} - ${duration}ms`,
          'PermissionsGuard',
        )
        throw error
      }

      this.logger.error(
        `Lỗi không mong muốn PermissionsGuard - ${duration}ms`,
        error instanceof Error ? error : new Error(String(error)),
        'PermissionsGuard',
      )
      throw new ForbiddenException('Bạn không có quyền truy cập')
    }
  }
}
