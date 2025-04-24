import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  Puesto: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  TipoIdentificacion: string;

  @ApiProperty()
  @IsNotEmpty()
  FechaNacimiento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  EstadoCivil: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Nacionalidad: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  IdDistrito: number;
}