import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../database/config.db';

import { Usuario } from '../../entities/usuario.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [], // EmpleadoController
  providers: [], //  EmpleadoService
  exports: [TypeOrmModule]
})
export class EmpleadoModule {}