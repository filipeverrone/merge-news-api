import { NestFactory } from '@nestjs/core';
import { setDocumentationConfig } from './api/documentation/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setDocumentationConfig(app);

  await app.listen(3000);
}
bootstrap();
