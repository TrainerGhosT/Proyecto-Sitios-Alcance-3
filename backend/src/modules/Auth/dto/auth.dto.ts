
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  Usuario: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  Contrasenia: string;
}

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  Nombre: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  Correo: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  Contrasenia: string;
}
