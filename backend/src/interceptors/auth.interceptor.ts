import {
  CustomGqlContext,
  CustomJwtPayload,
  CustomRequest,
} from '@shared/types/jwt.types'
import { LoggerService } from '@shared/services'
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private jwtService: JwtService,
    private logger: LoggerService,
  ) {}

  /**
   * Chặn các request GraphQL để trích xuất và xác thực JWT token
   * @param context - Execution context
   * @param next - Next handler in the chain
   * @returns Observable<HttpInterceptorContext> - Processed request
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext<CustomGqlContext>().req

    // Lấy token từ header Authorization
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException(
        'Bạn cần đăng nhập để thực hiện thao tác này',
      )
    }

    try {
      // Xác thực và giải mã JWT token
      const payload = this.jwtService.verify<CustomJwtPayload>(token)

      // Gắn thông tin user vào request
      request.userId = payload.sub
      request.user = {
        id: payload.sub,
        email: payload.email,
        role: payload.role,
        permissions: payload.permissions,
      }
    } catch (error) {
      this.logger.error(
        'Xác thực token thất bại',
        error instanceof Error ? error : new Error(String(error)),
        'AuthInterceptor',
      )
      throw new UnauthorizedException('Token không hợp lệ')
    }

    return next.handle()
  }

  /**
   * Trích xuất JWT token từ Authorization header
   * @param request - HTTP request object
   * @returns string | undefined - Token được trích xuất hoặc undefined
   */
  private extractTokenFromHeader(request: CustomRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
