import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  port: parseInt(process.env.SERVER_PORT || '9703', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.FRONTEND_URL || 'http://localhost:3000',
  corsCredentials: true,
  bcryptSaltRounds: 12,
  userStatus: {
    active: true,
    inactive: false,
  },
}))
