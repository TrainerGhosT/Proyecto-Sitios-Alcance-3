import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../database/config.db';

import { Usuario } from '../../entities/usuario.entity';
import { EmpleadoService } from './services/empleado.service';
import { EmpleadoController } from './controllers/empleado.controller';
import { Empleado } from 'src/entities/empleado.entity';
import { Provincia } from 'src/entities/provincia.entity';
import { Distrito } from 'src/entities/distrito.entity';
import { Canton } from 'src/entities/canton.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Empleado , Usuario, Provincia, Distrito, Canton])
  ],
  controllers: [EmpleadoController], 
  providers: [EmpleadoService], 
  exports: [TypeOrmModule]
})
export class EmpleadoModule {}