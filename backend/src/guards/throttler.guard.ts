import { CustomGqlContext } from '@shared/types/jwt.types'
import { LoggerService } from '@shared/services'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class CustomThrottlerGuard implements CanActivate {
  private requestCounts = new Map<
    string,
    { count: number; resetTime: number }
  >()

  constructor(private logger: LoggerService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const gqlContext = GqlExecutionContext.create(context)
      const request = gqlContext.getContext<CustomGqlContext>().req

      if (!request) {
        this.logger.warn(
          'Không tìm thấy request trong GraphQL context',
          'CustomThrottlerGuard',
        )
        return true
      }

      // Lấy địa chỉ IP
      const ipRaw =
        request.ip ||
        request.connection?.remoteAddress ||
        request.socket?.remoteAddress ||
        request.headers?.['x-forwarded-for'] ||
        request.headers?.['x-real-ip'] ||
        'unknown'

      const ip = Array.isArray(ipRaw) ? ipRaw[0] : String(ipRaw)

      const now = Date.now()
      const key = `throttle:${ip}`
      const current = this.requestCounts.get(key)

      // Reset nếu đã hết thời gian (5 phút)
      if (!current || now > current.resetTime) {
        this.requestCounts.set(key, { count: 1, resetTime: now + 300000 }) // 5 phút
        return true
      }

      // Kiểm tra giới hạn (1000 requests trong 5 phút)
      if (current.count >= 1000) {
        this.logger.warn(
          `Vượt quá giới hạn tốc độ cho IP ${ip}`,
          'CustomThrottlerGuard',
        )
        return false
      }

      // Tăng số lượng request
      current.count++
      this.requestCounts.set(key, current)

      return true
    } catch (error) {
      this.logger.error(
        'Lỗi Throttler',
        error instanceof Error ? error : new Error(String(error)),
        'CustomThrottlerGuard',
      )
      return true // Cho phép request đi qua nếu có lỗi
    }
  }
}
