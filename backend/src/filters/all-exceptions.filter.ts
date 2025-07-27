import { CustomResponse } from '@shared/types/jwt.types'
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const contextType = host.getType()

    if (contextType === 'http') {
      const ctx = host.switchToHttp()
      const response = ctx.getResponse<CustomResponse>()
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR

      const message =
        exception instanceof HttpException ? exception.getResponse() : exception

      response.status(status).json({
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
      })
    }
  }
}
