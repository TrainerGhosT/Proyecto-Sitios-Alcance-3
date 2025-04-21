import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Puesto } from '../../../entities/puesto.entity';

@Injectable()
export class PuestoService {
  constructor(
    @InjectRepository(Puesto)
    private readonly puestoRepository: Repository<Puesto>,
  ) {}

  async getPuestosActivos(): Promise<Puesto[]> {

    const obtenerPuestos = await this.puestoRepository.find({ 
      where: { Estado: 'Vigente' }
    });

    if (!obtenerPuestos) {
      throw new InternalServerErrorException('Error al consultar los puestos');
    }
    else if (obtenerPuestos.length === 0) {
      throw new NotFoundException('No se encontraron puestos vigentes');
    }

    return obtenerPuestos;
    
  }
}