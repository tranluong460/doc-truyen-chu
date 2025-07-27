import { registerAs } from '@nestjs/config'

export default registerAs('jwt', () => {
  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined')
  }

  return {
    secret: jwtSecret,
    issuer: 'alone-jwt-api',
    audience: 'alone-jwt-client',
    accessTokenExpiresIn: '24h',
    refreshTokenExpiresIn: '7d',
    tokenTypes: {
      access: 'access',
      refresh: 'refresh',
    },
  }
})
