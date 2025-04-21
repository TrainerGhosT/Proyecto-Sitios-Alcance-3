import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigDatabase } from './database/config.db';
import { ValidationPipe } from '@nestjs/common';
import { CORS } from './constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const envConfigService = app.get(ConfigService);

  const port: number = envConfigService.get('PORT');

  app.enableCors(CORS);

  app.setGlobalPrefix('api/v1');

  const configSwagger = new DocumentBuilder()
    .setTitle('Proyecto Sitios Alcance 3 - API')
    .setDescription('API NodeJS para el proyecto Sitios usando NestJS')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, configSwagger, {
      extraModels: [], 
      deepScanRoutes: true
    });
  SwaggerModule.setup('api/docs', app, document);

  const configDB = ConfigDatabase;
  await app.listen(port);

  console.log(`[*] Servidor iniciado en el puerto ${port}`);
  console.log(
    `[*] Base de datos ${configDB.database} de tipo: ${
      configDB.type
    }, corriendo en el host: ${envConfigService.get('DB_Host')} y puerto: ${envConfigService.get('DB_Port')}`,
  );

  console.log('[*] Documentación Swagger disponible en:', `http://localhost:${port}/api/docs`);

}
bootstrap();
