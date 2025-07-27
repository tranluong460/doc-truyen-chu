import { Inject } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import jwtConfig from '@config/jwt.config'
import { ERROR_MESSAGES } from '@shared/constants'
import { CustomJwtPayload } from '@shared/types/jwt.types'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY)
    private authConfig: ConfigType<typeof jwtConfig>,
  ) {
    const jwtSecret = authConfig.secret
    const jwtIssuer = authConfig.issuer
    const jwtAudience = authConfig.audience

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
      issuer: jwtIssuer,
      audience: jwtAudience,
    })
  }

  validate(payload: CustomJwtPayload) {
    if (!payload.sub) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_TOKEN_PAYLOAD)
    }

    if (!payload.email || !payload.role) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_TOKEN_PAYLOAD)
    }

    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions,
    }
  }
}
