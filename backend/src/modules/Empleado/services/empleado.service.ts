import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../../../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/empleado.dto';


@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  async registrarEmpleado(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    try {
      // Validate all required fields are present
      if (
        !createEmpleadoDto.Nombre ||
        !createEmpleadoDto.Puesto ||
        !createEmpleadoDto.Direccion ||
        !createEmpleadoDto.TipoIdentificacion ||
        !createEmpleadoDto.FechaNacimiento ||
        !createEmpleadoDto.EstadoCivil ||
        !createEmpleadoDto.Nacionalidad ||
        !createEmpleadoDto.IdDistrito
      ) {
        throw new BadRequestException('Todos los campos son obligatorios');
      }

      // Create new employee entity
      const nuevoEmpleado = this.empleadoRepository.create({
        Nombre: createEmpleadoDto.Nombre,
        PuestoId: createEmpleadoDto.Puesto,
        Direccion: createEmpleadoDto.Direccion,
        TipoIdentificacion: createEmpleadoDto.TipoIdentificacion,
        FechaNacimiento: createEmpleadoDto.FechaNacimiento,
        EstadoCivil: createEmpleadoDto.EstadoCivil,
        Nacionalidad: createEmpleadoDto.Nacionalidad,
        IdDistrito: createEmpleadoDto.IdDistrito,
      });

      // Save to database
      const savedEmpleado = await this.empleadoRepository.save(nuevoEmpleado);
      return savedEmpleado;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('Error al registrar empleado:', error);
      throw new InternalServerErrorException('Error al registrar el empleado');
    }
  }
}