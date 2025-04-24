import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OferenteService } from '../services/oferente.service';

@ApiTags('Oferentes ')
@Controller('')
export class OferenteController {
  constructor(private readonly oferentesService: OferenteService) {}

  @Get('oferentesListos/:id')
  @ApiOperation({
    summary: 'Obtener oferentes que cumplen con los requisitos de un puesto',
  })
  @ApiParam({ name: 'id', description: 'ID del Puesto' })
  @ApiResponse({
    status: 200,
    description: 'Lista de oferentes que cumplen los requisitos',
  })
  async getOferentesListos(@Param('id', ParseIntPipe) idPuesto: number) {
    return await this.oferentesService.getOferentesListos(idPuesto);
  }

  @Get('oferente/:id')
  @ApiOperation({ summary: 'Obtener un oferente por ID' })
  @ApiParam({ name: 'id', description: 'ID del oferente' })
  @ApiResponse({
    status: 200,
    description: 'Detalle de un Oferente',
  })
  @ApiResponse({ status: 404, description: 'Oferente no encontrado' })
  @ApiResponse({ status: 500, description: 'Error del servidor' })
  async obtenerOferentePorId(@Param('id', ParseIntPipe) id: number) {
    try {
      const oferente = await this.oferentesService.obtenerOferentePorId(id);
      return {
        statusCode: HttpStatus.OK,
        oferente,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error al consultar oferente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
