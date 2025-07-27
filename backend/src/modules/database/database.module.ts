import databaseConfig from '@config/database.config'
import { DatabaseService } from '@modules/database/database.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
