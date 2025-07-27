import jwtConfig from '@config/jwt.config'
import { DatabaseModule } from '@modules/database/database.module'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import {
  LoggerService,
  PaginationService,
  TokenValidationService,
} from '@shared/services'

@Global()
@Module({
  imports: [
    ConfigModule.forFeature(jwtConfig),
    JwtModule.register({}), // JWT module cơ bản cho TokenValidationService
    DatabaseModule, // Import DatabaseModule để PaginationService có thể access DatabaseService
  ],
  providers: [TokenValidationService, LoggerService, PaginationService],
  exports: [TokenValidationService, LoggerService, PaginationService],
})
export class SharedModule {}
