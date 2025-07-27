import appConfig from '@config/app.config'
import { DatabaseModule } from '@modules/database/database.module'
import { JwtGlobalModule } from '@modules/jwt/jwt.module'
import { UserResolver } from '@modules/user/user.resolver'
import { UserService } from '@modules/user/user.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    DatabaseModule,
    JwtGlobalModule,
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
