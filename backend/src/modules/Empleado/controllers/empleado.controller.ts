import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { EmpleadoService } from '../services/empleado.service';

import { Empleado } from '../../../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/empleado.dto';

@ApiTags('Empleado')
@Controller('')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post('empleado')
  @ApiOperation({ summary: 'Registrar un nuevo empleado' })
  @ApiBody({ type: CreateEmpleadoDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Empleado registrado correctamente'
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 500, description: 'Error del servidor' })
  async registrarEmpleado(@Body() createEmpleadoDto: CreateEmpleadoDto){
    try {
      const nuevoEmpleado = await this.empleadoService.registrarEmpleado(createEmpleadoDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Empleado registrado exitosamente',
        empleado: nuevoEmpleado
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Error al registrar el empleado', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}