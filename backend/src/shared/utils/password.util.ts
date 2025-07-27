export interface PasswordStrengthResult {
  isValid: boolean
  score: number
  feedback: string[]
}

export const validatePasswordStrength = (
  password: string,
): PasswordStrengthResult => {
  const feedback: string[] = []
  let score = 0

  if (password.length < 8) {
    feedback.push('Mật khẩu phải có ít nhất 8 ký tự')
  } else {
    score += 1
  }

  if (!/[a-z]/.test(password)) {
    feedback.push('Mật khẩu phải chứa ít nhất một chữ thường')
  } else {
    score += 1
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push('Mật khẩu phải chứa ít nhất một chữ hoa')
  } else {
    score += 1
  }

  if (!/\d/.test(password)) {
    feedback.push('Mật khẩu phải chứa ít nhất một số')
  } else {
    score += 1
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    feedback.push('Mật khẩu nên chứa ít nhất một ký tự đặc biệt (!@#$%^&*)')
  } else {
    score += 1
  }

  // Kiểm tra các mẫu phổ biến yếu
  const commonPatterns = [
    /(.)\1{2,}/, // 3 ký tự liên tiếp giống nhau
    /123456|654321|qwerty|asdfgh|password/i, // Mẫu phổ biến
  ]

  for (const pattern of commonPatterns) {
    if (pattern.test(password)) {
      feedback.push('Mật khẩu chứa mẫu dễ đoán')
      score -= 1
      break
    }
  }

  return {
    isValid: feedback.length === 0 && score >= 4,
    score: Math.max(0, Math.min(5, score)),
    feedback,
  }
}
