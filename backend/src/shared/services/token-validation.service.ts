import { CustomJwtPayload } from '@shared/types'
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import jwtConfig from '@config/jwt.config'

@Injectable()
export class TokenValidationService {
  constructor(
    private jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private jwt: ConfigType<typeof jwtConfig>,
  ) {}

  extractTokenFromHeader(authHeader: string | undefined): string | undefined {
    if (!authHeader) return undefined
    const [type, token] = authHeader.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }

  validateToken(token: string): CustomJwtPayload {
    try {
      // Verify token với cùng config như khi sign
      const payload = this.jwtService.verify<CustomJwtPayload>(token, {
        secret: this.jwt.secret,
        issuer: this.jwt.issuer,
        audience: this.jwt.audience,
      })

      if (!payload.sub || !payload.email || !payload.role) {
        throw new UnauthorizedException('Token payload không hợp lệ')
      }

      if (payload.type === this.jwt.tokenTypes.refresh) {
        throw new UnauthorizedException(
          'Không được sử dụng refresh token để truy cập API',
        )
      }

      const now = Math.floor(Date.now() / 1000)
      if (payload.exp && payload.exp < now) {
        throw new UnauthorizedException('Token đã hết hạn')
      }

      return payload
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error
      }
      throw new UnauthorizedException('Token không hợp lệ')
    }
  }
}
