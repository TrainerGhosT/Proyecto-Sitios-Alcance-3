import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PuestoService } from '../services/puesto.service';
import { Puesto } from '../../../entities/puesto.entity';

@ApiTags('Puestos')
@Controller('puestos')
export class PuestoController {
  constructor(private readonly puestoService: PuestoService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de los puestos vigentes' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de puestos obtenida correctamente',
  })
  @ApiResponse({ 
    status: 404, 
    description: 'No se encontraron puestos vigentes',
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Error al consultar los puestos',
  })
  async findAll(): Promise<Puesto[]> {
    return await this.puestoService.getPuestosActivos();
  }
}