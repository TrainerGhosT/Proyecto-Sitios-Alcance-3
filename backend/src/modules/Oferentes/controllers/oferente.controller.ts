import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OferenteService } from '../services/oferente.service';


@ApiTags('Oferentes ')
@Controller('oferentesListos')
export class OferenteController {
  constructor(private readonly oferentesListosService: OferenteService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Obtener oferentes que cumplen con los requisitos de un puesto' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de oferentes que cumplen los requisitos'
  })
  async getOferentesListos(@Param('id', ParseIntPipe) idPuesto: number) {
    return await this.oferentesListosService.getOferentesListos(idPuesto);
  }
}