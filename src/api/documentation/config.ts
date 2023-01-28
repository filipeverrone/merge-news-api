import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setDocumentationConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Merge News API')
    .setDescription('Get news by theme from some news around the world')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
