/**
 * Centralized validation rules and constants
 *
 * Tập trung tất cả validation rules để tránh duplication và dễ maintain
 */

export const VALIDATION_CONSTANTS = {
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
    MESSAGE:
      'Mật khẩu phải chứa ít nhất một chữ thường, một chữ hoa, một số và một ký tự đặc biệt',
  },

  EMAIL: {
    MAX_LENGTH: 254,
    BLOCKED_EMAILS: [
      'admin@admin.com',
      'test@test.com',
      'user@user.com',
    ] as const,
  },

  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  ADDRESS: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 500,
  },

  USER_ID: {
    PATTERN:
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  },

  JWT_ID: {
    SEPARATOR: '-',
  },
} as const

export const VALIDATION_MESSAGES = {
  REQUIRED: {
    STRING: (field: string) => `${field} phải là chuỗi`,
    NOT_EMPTY: (field: string) => `${field} không được để trống`,
    EMAIL: 'Email không hợp lệ',
    UUID: 'ID phải là UUID hợp lệ',
  },
  LENGTH: {
    MIN: (field: string, min: number) =>
      `${field} phải có ít nhất ${min} ký tự`,
    MAX: (field: string, max: number) => `${field} không được quá ${max} ký tự`,
  },
  PASSWORD: {
    CURRENT_REQUIRED: 'Mật khẩu hiện tại không được để trống',
    NEW_REQUIRED: 'Mật khẩu mới không được để trống',
    STRENGTH: VALIDATION_CONSTANTS.PASSWORD.MESSAGE,
  },
  EMAIL: {
    INVALID: 'Email không hợp lệ',
    BLOCKED: 'Email này không được phép sử dụng',
  },
} as const

export const GRAPHQL_DESCRIPTIONS = {
  USER: {
    NAME: 'Tên đầy đủ của người dùng',
    EMAIL: 'Email đăng nhập của người dùng',
    ADDRESS: 'Địa chỉ của người dùng',
    ROLE: 'Vai trò của người dùng trong hệ thống',
    PERMISSIONS: 'Danh sách quyền của người dùng',
    ID: 'ID định danh duy nhất của người dùng',
  },
  AUTH: {
    ACCESS_TOKEN: 'JWT access token',
    REFRESH_TOKEN: 'JWT refresh token',
    CURRENT_PASSWORD: 'Mật khẩu hiện tại',
    NEW_PASSWORD: 'Mật khẩu mới',
    LOGIN_PASSWORD: 'Mật khẩu đăng nhập',
  },
} as const
