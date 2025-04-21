import { Global, Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';






import { Puesto } from 'src/entities/puesto.entity';
import { Requisito } from 'src/entities/requisito.entity';
import { Oferente } from 'src/entities/oferente.entity';
import { OferenteService } from './services/oferente.service';
import { OferenteController } from './controllers/oferente.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Puesto, Oferente, Requisito])
  ],
  controllers: [OferenteController],
  providers: [OferenteService],
  exports: [OferenteService, TypeOrmModule]
})
export class OferentesModule {}