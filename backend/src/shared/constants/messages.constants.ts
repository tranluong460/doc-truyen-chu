export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Thông tin đăng nhập không đúng',
  USER_NOT_FOUND: 'Không tìm thấy người dùng',
  INVALID_TOKEN: 'Token không hợp lệ',
  INVALID_REFRESH_TOKEN: 'Refresh token không hợp lệ',
  INVALID_TOKEN_PAYLOAD: 'Dữ liệu token không hợp lệ',
  SUPABASE_CONFIG_MISSING: 'Thiếu cấu hình Supabase',
  JWT_SECRET_MISSING: 'Chưa cấu hình JWT_SECRET',
} as const

export const SUCCESS_MESSAGES = {
  TOKEN_REVOKED: 'Thu hồi token thành công',
} as const

export const TIME_CONSTANTS = {
  SECONDS_IN_MINUTE: 60,
  MINUTES_IN_HOUR: 60,
  HOURS_IN_DAY: 24,
  DAYS_IN_WEEK: 7,
} as const
