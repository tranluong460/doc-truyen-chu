import appConfig from '@config/app.config'
import jwtConfig from '@config/jwt.config'
import { DatabaseService } from '@modules/database/database.service'
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  VALIDATION_CONSTANTS,
} from '@shared/constants'
import { LoggerService } from '@shared/services'
import { DatabaseUser } from '@shared/types/user.types'
import { CustomAuthResponse, CustomJwtPayload } from '@shared/types/jwt.types'
import * as bcrypt from 'bcrypt'

/**
 * Service xử lý xác thực và phân quyền cho hệ thống
 *
 * Chức năng chính:
 * - Xác thực thông tin đăng nhập (email/password)
 * - Tạo và quản lý JWT tokens (access token + refresh token)
 * - Refresh tokens khi hết hạn
 * - Thu hồi tokens khi đăng xuất
 *
 * Security features:
 * - Bcrypt password hashing
 * - JWT với payload chứa user info và permissions
 * - Separate access/refresh token với thời gian sống khác nhau
 * - Detailed logging cho audit trails
 *
 * @author Backend Team
 * @since 1.0.0
 */
@Injectable()
export class AuthService {
  constructor(
    private databaseService: DatabaseService,
    private jwtService: JwtService,
    private logger: LoggerService,
    @Inject(appConfig.KEY)
    private appConfigService: ConfigType<typeof appConfig>,
    @Inject(jwtConfig.KEY)
    private jwtConfigService: ConfigType<typeof jwtConfig>,
  ) {}

  /**
   * Xác thực thông tin đăng nhập của người dùng
   *
   * Flow xác thực:
   * 1. Chuẩn hóa email (trim, lowercase)
   * 2. Tìm user trong database theo email và trạng thái active
   * 3. So sánh password với bcrypt hash trong database
   * 4. Trả về thông tin user nếu hợp lệ
   *
   * @param email - Email đăng nhập của user
   * @param password - Mật khẩu plaintext từ user input
   * @returns Promise<DatabaseUser> - Thông tin user đã xác thực
   * @throws UnauthorizedException - Khi email/password không hợp lệ
   *
   * @example
   * ```typescript
   * const user = await authService.validateUser('admin@example.com', 'password123');
   * console.log(user.id, user.role); // UUID, 'ADMIN'
   * ```
   */
  async validateUser(email: string, password: string): Promise<DatabaseUser> {
    const normalizedEmail = email?.trim().toLowerCase()
    this.logger.debug(
      `Thử đăng nhập cho: ${normalizedEmail?.substring(0, 3)}***`,
      'AuthService',
    )

    try {
      const { data: user, error } = await this.databaseService
        .getClient()
        .from('users')
        .select('*')
        .eq('email', normalizedEmail)
        .eq('is_active', this.appConfigService.userStatus.active)
        .single()

      if (error || !user) {
        this.logger.warn(
          `Đăng nhập thất bại: không tìm thấy user ${normalizedEmail?.substring(0, 3)}***`,
          'AuthService',
        )
        throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS)
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        user.password || '',
      )
      if (!isPasswordValid) {
        this.logger.warn(
          `Đăng nhập thất bại: mật khẩu không đúng cho user ${user.id}`,
          'AuthService',
        )
        throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS)
      }

      this.logger.info(
        `Xác thực user thành công: ${user.id} (${user.role})`,
        'AuthService',
      )

      return user
    } catch (error) {
      this.logger.error(
        'Xác thực đăng nhập thất bại',
        error instanceof Error ? error : new Error(String(error)),
        'AuthService',
      )
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS)
    }
  }

  /**
   * Tạo JWT tokens cho user đã xác thực
   *
   * Tạo 2 loại tokens:
   * - Access Token: Chứa user info + permissions, thời gian sống ngắn (15-30 phút)
   * - Refresh Token: Chỉ chứa user ID, thời gian sống dài (7-30 ngày)
   *
   * @param user - Thông tin user đã được xác thực từ validateUser()
   * @returns CustomAuthResponse - Object chứa access_token, refresh_token và user info
   *
   * @example
   * ```typescript
   * const tokens = authService.login(validatedUser);
   * * tokens = {
   * *   access_token: 'eyJhbGciOiJIUzI1NiIs...',
   * *   refresh_token: 'eyJhbGciOiJIUzI1NiIs...',
   * *   user: { id, email, name, role, permissions }
   * * }
   * ```
   */
  login(user: DatabaseUser): CustomAuthResponse {
    const now = Math.floor(Date.now() / 1000)
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      permissions: user.permissions,
      iat: now,
      jti: `${user.id}${VALIDATION_CONSTANTS.JWT_ID.SEPARATOR}${now}`,
    }

    const refreshPayload = {
      sub: user.id,
      email: user.email,
      iat: now,
      type: this.jwtConfigService.tokenTypes.refresh,
    }

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: this.jwtConfigService.accessTokenExpiresIn,
      }),
      refresh_token: this.jwtService.sign(refreshPayload, {
        expiresIn: this.jwtConfigService.refreshTokenExpiresIn,
      }),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        permissions: user.permissions,
      },
    }
  }

  /**
   * Làm mới access token bằng refresh token
   *
   * Flow refresh:
   * 1. Verify refresh token hợp lệ và chưa hết hạn
   * 2. Kiểm tra token type là 'refresh' (không phải access token)
   * 3. Tìm user trong database để đảm bảo vẫn active
   * 4. Tạo cặp tokens mới (access + refresh)
   *
   * @param refreshToken - Refresh token string từ client
   * @returns Promise<CustomAuthResponse> - Cặp tokens mới và user info
   * @throws UnauthorizedException - Khi refresh token không hợp lệ hoặc user không tồn tại
   *
   * @example
   * ```typescript
   * const newTokens = await authService.refreshToken(oldRefreshToken);
   * * Client lưu tokens mới và discard tokens cũ
   * ```
   */
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify<CustomJwtPayload>(refreshToken)

      if (payload.type !== this.jwtConfigService.tokenTypes.refresh) {
        throw new UnauthorizedException(ERROR_MESSAGES.INVALID_REFRESH_TOKEN)
      }

      const { data: user, error } = await this.databaseService
        .getClient()
        .from('users')
        .select('*')
        .eq('id', payload.sub)
        .eq('is_active', this.appConfigService.userStatus.active)
        .single()

      if (error || !user) {
        throw new UnauthorizedException(ERROR_MESSAGES.USER_NOT_FOUND)
      }

      return this.login(user)
    } catch (error) {
      this.logger.error(
        'Xác thực refresh token thất bại',
        error instanceof Error ? error : new Error(String(error)),
        'AuthService',
      )
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_REFRESH_TOKEN)
    }
  }

  /**
   * Thu hồi refresh token (đăng xuất)
   *
   * Hiện tại chỉ validate token và trả về success message.
   * TODO: Implement token blacklist với Redis để thực sự revoke tokens
   *
   * @param refreshToken - Refresh token cần thu hồi
   * @returns Object - Message xác nhận đã thu hồi token
   * @throws UnauthorizedException - Khi refresh token không hợp lệ
   *
   * @example
   * ```typescript
   * const result = authService.revokeToken(refreshToken);
   * * result = { message: 'Token đã được thu hồi' }
   * ```
   */
  revokeToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify<CustomJwtPayload>(refreshToken)

      if (payload.type !== this.jwtConfigService.tokenTypes.refresh) {
        throw new UnauthorizedException(ERROR_MESSAGES.INVALID_REFRESH_TOKEN)
      }

      return { message: SUCCESS_MESSAGES.TOKEN_REVOKED }
    } catch (error) {
      this.logger.error(
        'Thu hồi token thất bại',
        error instanceof Error ? error : new Error(String(error)),
        'AuthService',
      )
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_REFRESH_TOKEN)
    }
  }
}
