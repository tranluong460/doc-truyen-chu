import { BadRequestException } from '@nestjs/common'

export class SecurityValidator {
  /**
   * Kiểm tra SQL injection patterns
   * @param input - Chuỗi đầu vào cần kiểm tra
   * @throws BadRequestException nếu phát hiện SQL injection
   */
  static validateSqlInjection(input: string): void {
    if (!input) return

    const sqlInjectionPatterns = [
      /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute)\b)/gi,
      /(--|\/\*|\*\/)/g,
      /(\b(or|and)\b\s+\d+\s*=\s*\d+)/gi,
      /('|"|;|\\)/g,
    ]

    for (const pattern of sqlInjectionPatterns) {
      if (pattern.test(input)) {
        throw new BadRequestException(
          'Dữ liệu không hợp lệ - phát hiện ký tự nguy hiểm',
        )
      }
    }
  }

  /**
   * Kiểm tra XSS patterns
   * @param input - Chuỗi đầu vào cần kiểm tra
   * @throws BadRequestException nếu phát hiện XSS
   */
  static validateXss(input: string): void {
    if (!input) return

    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe/gi,
      /<object/gi,
      /<embed/gi,
      /<meta/gi,
    ]

    for (const pattern of xssPatterns) {
      if (pattern.test(input)) {
        throw new BadRequestException(
          'Dữ liệu không hợp lệ - phát hiện mã độc hại',
        )
      }
    }
  }

  /**
   * Kiểm tra và làm sạch dữ liệu đầu vào
   * @param input - Chuỗi đầu vào
   * @returns Chuỗi đã được làm sạch
   */
  static sanitizeInput(input: string): string {
    if (!input) return input

    this.validateSqlInjection(input)
    this.validateXss(input)

    // Loại bỏ các ký tự đặc biệt nguy hiểm
    return (
      input
        .trim()
        // Làm sạch cơ bản - loại bỏ các ký tự nguy hiểm
        .split('\u0000')
        .join('')
    )
  }

  /**
   * Kiểm tra định dạng UUID
   * @param id - Chuỗi UUID
   * @throws BadRequestException nếu UUID không hợp lệ
   */
  static validateUuid(id: string): void {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    if (!uuidRegex.test(id)) {
      throw new BadRequestException('ID không hợp lệ')
    }
  }
}
