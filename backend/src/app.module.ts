import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabase } from './database/config.db';
import { AuthModule } from './modules/Auth/auth.module';

import { PuestoModule } from './modules/Puestos/puesto.module';
import { OferentesModule } from './modules/Oferentes/oferente.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...ConfigDatabase,
      }),
    }),
    AuthModule,
    PuestoModule,
    OferentesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
