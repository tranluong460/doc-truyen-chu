import jwtConfig from '@config/jwt.config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      imports: [ConfigModule.forFeature(jwtConfig)],
      useFactory: (config: ConfigType<typeof jwtConfig>) => ({
        secret: config.secret,
        signOptions: {
          expiresIn: config.accessTokenExpiresIn,
          issuer: config.issuer,
          audience: config.audience,
        },
      }),
      inject: [jwtConfig.KEY],
    }),
  ],
  exports: [JwtModule],
})
export class JwtGlobalModule {}
