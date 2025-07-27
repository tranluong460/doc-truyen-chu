import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { join } from 'node:path'
import winston, { createLogger, format, transports } from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'

@Injectable()
export class LoggerService {
  private logger: winston.Logger

  constructor(private configService: ConfigService) {
    const nodeEnv = this.configService.get<string>('app.nodeEnv')
    const logDir = join(process.cwd(), 'logs')

    const consoleFormat = format.printf(
      ({
        level,
        message,
        timestamp,
        context,
      }: {
        level: string
        message: string
        timestamp: string
        context: string
      }) => {
        const colorizer = format.colorize()
        let levelStr = `[${level.toUpperCase()}]`
        levelStr = colorizer.colorize(level, levelStr)
        const contextStr = context ? `[${context}]` : ''
        return `${timestamp} ${levelStr}${contextStr}: ${message}`
      },
    )

    const fileFormat = format.printf(
      ({
        level,
        message,
        timestamp,
        context,
      }: {
        level: string
        message: string
        timestamp: string
        context: string
      }) => {
        const contextStr = context ? `[${context}]` : ''
        return `[${timestamp}]-[${level.toUpperCase()}]${contextStr}: ${message}`
      },
    )

    this.logger = createLogger({
      level: nodeEnv === 'production' ? 'info' : 'debug',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
      ),
      transports: [
        // Console transport (chỉ trong development)
        ...(nodeEnv !== 'production'
          ? [
              new transports.Console({
                format: format.combine(consoleFormat),
              }),
            ]
          : []),

        // File transports
        new DailyRotateFile({
          filename: join(logDir, 'app-%DATE%.log'),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d', // 14 ngày cho production
          level: 'info',
          format: fileFormat,
        }),

        new DailyRotateFile({
          filename: join(logDir, 'error-%DATE%.log'),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '30d', // Lỗi giữ lâu hơn
          level: 'error',
          format: fileFormat,
        }),
      ],
    })
  }

  info(message: string, context?: string): void {
    this.logger.info(message, { context })
  }

  warn(message: string, context?: string): void {
    this.logger.warn(message, { context })
  }

  error(message: string, error?: Error, context?: string): void {
    this.logger.error(`${message}${error ? ` | ${error.stack}` : ''}`, {
      context,
    })
  }

  debug(message: string, context?: string): void {
    this.logger.debug(message, { context })
  }

  log(
    level: 'info' | 'warn' | 'error' | 'debug',
    message: string,
    context?: string,
  ): void {
    this.logger.log(level, message, { context })
  }
}
