import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../database/config.db';



import { PuestoController } from './controllers/puesto.controller';
import { PuestoService } from './services/puesto.service';
import { Puesto } from 'src/entities/puesto.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Puesto])
  ],
  controllers: [PuestoController],
  providers: [PuestoService],
  exports: [PuestoService, TypeOrmModule]
})
export class PuestoModule {}