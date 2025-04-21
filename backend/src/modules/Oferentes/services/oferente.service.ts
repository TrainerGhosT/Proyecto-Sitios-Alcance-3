import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Oferente } from '../../../entities/oferente.entity';
import { Requisito } from '../../../entities/requisito.entity';
import { Puesto } from '../../../entities/puesto.entity';
import * as moment from 'moment';

@Injectable()
export class OferenteService {
  constructor(
    @InjectRepository(Oferente)
    private readonly oferenteRepository: Repository<Oferente>,
    @InjectRepository(Requisito)
    private readonly requisitoRepository: Repository<Requisito>,
    @InjectRepository(Puesto)
    private readonly puestoRepository: Repository<Puesto>,
  ) {}

  async getOferentesListos(idPuesto: number) {
    // Verificar que el puesto existe
    const puesto = await this.puestoRepository.findOne({
      where: { IdPuesto: idPuesto },
    });

    if (!puesto) {
      throw new NotFoundException('Puesto no encontrado');
    }

    // Obtener requisitos del puesto
    const requisitos = await this.requisitoRepository.find({
      where: { IdPuesto: idPuesto },
    });

    // Obtener todos los oferentes
    const oferentes = await this.oferenteRepository.find();

    // Filtrar oferentes que cumplen todos los requisitos
    const oferentesFiltrados = oferentes.filter((oferente) =>
      requisitos.every((requisito) =>
        this.cumpleRequisito(oferente, requisito),
      ),
    );

    // Mapear solo los datos necesarios
    return oferentesFiltrados.map((oferente) => ({
      nombre: oferente.Nombre,
      identificacion: oferente.Identificacion,
    }));
  }

  private cumpleRequisito(oferente: Oferente, requisito: Requisito): boolean {
    /*
   Ejemplos de r.Descripcion que se usaron:
   - "Mayor de 18 anios" => calculamos edad
   - "Nacionalidad costarricense" => o.Nacionalidad === 'costarricense'
   - "El distrito debe iniciar con 3" => o.IdDistrito comienza con '3'
   - "Mayor de 21 anios", etc.
  */

    const desc = requisito.Descripcion.toLowerCase();

    if (desc.includes('mayor de 18')) {
      return this.calcularEdad(oferente.FechaNacimiento) >= 18;
    }

    if (desc.includes('mayor de 21')) {
      return this.calcularEdad(oferente.FechaNacimiento) >= 21;
    }

    if (desc.includes('costarricense')) {
      return oferente.Nacionalidad?.toLowerCase() === 'costarricense';
    }

    if (desc.includes('mexicana')) {
      return oferente.Nacionalidad?.toLowerCase() === 'mexicana';
    }

    if (desc.includes('distrito debe iniciar con 3')) {
      return oferente.IdDistrito?.toString().startsWith('3');
    }

    if (desc.includes('distrito debe iniciar con 4')) {
      return oferente.IdDistrito?.toString().startsWith('4');
    }

    return false;
  }

  private calcularEdad(fechaNac: Date): number {
    if (!fechaNac) return 0;
    return moment().diff(moment(fechaNac), 'years');
  }
}
