import { DatabaseUser } from '@shared/types'
import { SupabaseClient } from '@supabase/supabase-js'

export type TableName = 'users'

export type CustomSupabaseClient = SupabaseClient<Database>

type Database = {
  public: {
    Tables: {
      users: {
        Row: DatabaseUser
        Insert: Omit<
          DatabaseUser,
          'id' | 'is_active' | 'created_at' | 'updated_at'
        >
        Update: Partial<Omit<DatabaseUser, 'id' | 'is_active' | 'created_at'>>
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}

// Re-export for backward compatibility
export type UserData = DatabaseUser
