import { AuthResolver } from '@modules/auth/auth.resolver'
import { AuthService } from '@modules/auth/auth.service'
import { JwtGlobalModule } from '@modules/jwt/jwt.module'
import { JwtStrategy } from '@modules/jwt/jwt.strategy'
import { DatabaseModule } from '@modules/database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import appConfig from '@config/app.config'
import jwtConfig from '@config/jwt.config'

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    ConfigModule.forFeature(jwtConfig),
    DatabaseModule,
    PassportModule,
    JwtGlobalModule,
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
