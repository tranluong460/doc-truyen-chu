import databaseConfig from '@config/database.config'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { CustomSupabaseClient } from '@shared/types/database.types'
import { createClient } from '@supabase/supabase-js'

@Injectable()
export class DatabaseService {
  private client: CustomSupabaseClient

  constructor(
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {
    if (!this.dbConfig.supabase.url || !this.dbConfig.supabase.serviceRoleKey) {
      throw new Error('Supabase configuration is missing')
    }

    this.client = createClient(
      this.dbConfig.supabase.url,
      this.dbConfig.supabase.serviceRoleKey,
    )
  }

  getClient(): CustomSupabaseClient {
    if (!this.client) {
      throw new Error('Database client is not initialized')
    }
    return this.client
  }
}
