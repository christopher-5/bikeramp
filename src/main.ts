import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Endpoints } from './types/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(Endpoints.GLOBAL_PREFIX);
  await app.listen(3000);
}
bootstrap();
