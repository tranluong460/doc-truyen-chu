import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.enableCors({
    origin: configService.get<string>('app.corsOrigin'),
    credentials: configService.get<boolean>('app.corsCredentials'),
  })

  const port = configService.get<number>('app.port') ?? 9703
  await app.listen(port)
}

void bootstrap()
