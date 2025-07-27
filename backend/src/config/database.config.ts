import { registerAs } from '@nestjs/config'

export default registerAs('database', () => {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL is not defined')
  }

  if (!supabaseServiceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not defined')
  }

  return {
    supabase: {
      url: supabaseUrl,
      serviceRoleKey: supabaseServiceRoleKey,
    },
  }
})
