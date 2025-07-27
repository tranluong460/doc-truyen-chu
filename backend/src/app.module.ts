import appConfig from '@config/app.config'
import databaseConfig from '@config/database.config'
import jwtConfig from '@config/jwt.config'
import { AllExceptionsFilter } from '@filters'
import { PermissionsGuard } from '@guards'
import { CustomThrottlerGuard } from '@guards'
import { SharedModule } from '@shared/shared.module'
import { TokenValidationService, LoggerService } from '@shared/services'
import { CustomGqlContext } from '@shared/types/jwt.types'
import { AuthModule } from '@modules/auth/auth.module'
import { JwtGlobalModule } from '@modules/jwt/jwt.module'
import { DatabaseModule } from '@modules/database/database.module'
import { UserModule } from '@modules/user/user.module'
import { UserService } from '@modules/user/user.service'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_PIPE, Reflector } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
      load: [appConfig, databaseConfig, jwtConfig],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      csrfPrevention: true,
      playground: false,
      context: (gql: CustomGqlContext) => ({ req: gql.req }),
      plugins: [],
    }),

    SharedModule,
    DatabaseModule,
    UserModule,
    JwtGlobalModule,
    AuthModule,
  ],

  controllers: [AppController],

  providers: [
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          whitelist: false,
          forbidNonWhitelisted: false,
          transform: true,
          transformOptions: {
            enableImplicitConversion: true,
          },
          skipMissingProperties: true,
          skipNullProperties: true,
          skipUndefinedProperties: true,
        }),
    },

    {
      provide: APP_GUARD,
      useFactory: (
        reflector: Reflector,
        userService: UserService,
        tokenValidationService: TokenValidationService,
        loggerService: LoggerService,
      ) => {
        return new PermissionsGuard(
          reflector,
          userService,
          tokenValidationService,
          loggerService,
        )
      },
      inject: [Reflector, UserService, TokenValidationService, LoggerService],
    },

    {
      provide: APP_GUARD,
      useFactory: (loggerService: LoggerService) => {
        return new CustomThrottlerGuard(loggerService)
      },
      inject: [LoggerService],
    },

    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
