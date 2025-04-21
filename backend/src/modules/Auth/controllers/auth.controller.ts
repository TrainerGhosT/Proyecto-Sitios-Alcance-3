import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Autenticación')
@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuario' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario autenticado correctamente',
    schema: {
      example: {
        Usuario: 'User',
        Resultado: true
      }
    }
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Usuario no encontrado',
    schema: {
      example: {
        Usuario: null,
        Resultado: false,
        message: 'Usuario y/o contraseña incorrectos'
      }
    }
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Credenciales incorrectas',
    schema: {
      example: {
        Usuario: 'User',
        Resultado: false,
        message: 'Usuario y/o contraseña incorrectos'
      }
    }
  })
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }


  @Post('register')
  @ApiOperation({ summary: 'Registrar nuevo usuario' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario registrado correctamente',
    schema: {
      example: {
        Usuario: 'Juan Pérez',
        Resultado: true
      }
    }
  })
  @ApiResponse({ status: 401, description: 'El usuario ya existe' })
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }
}