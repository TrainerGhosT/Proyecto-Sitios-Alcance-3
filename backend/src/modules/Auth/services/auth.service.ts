import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../../entities/usuario.entity';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { Correo: loginDto.Correo },
    });

    if (!usuario) {
      throw new BadRequestException({
        Usuario: null,
        Resultado: false,
        message: 'Usuario y/o contraseña incorrectos',
      });
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.Contrasenia,
      usuario.Contrasenia,
    );

    if (!isPasswordValid) {
      // Incrementar intentos fallidos
      usuario.IntentosFallidos = (usuario.IntentosFallidos || 0) + 1;
      await this.usuarioRepository.save(usuario);

      throw new UnauthorizedException({
        Usuario: usuario.Nombre,
        Resultado: false,
        message: 'Usuario y/o contraseña incorrectos',
      });
    }

    // Actualizar último acceso y resetear intentos fallidos
    usuario.UltimoAcceso = new Date();
    usuario.IntentosFallidos = 0;
    await this.usuarioRepository.save(usuario);

    // Retornar respuesta exitosa
    return {
      
      Usuario: usuario.Nombre,
      Resultado: true,
    };
    
  }

  async register(registerDto: RegisterDto) {
    const usuarioExiste = await this.usuarioRepository.findOne({
      where: { Correo: registerDto.Correo },
    });

    if (usuarioExiste) {
      throw new UnauthorizedException('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(registerDto.Contrasenia, 10);

    const nuevoUsuario = this.usuarioRepository.create({
      ...registerDto,
      Contrasenia: hashedPassword,
      Estado: 'ACTIVO',
      FechaCreacion: new Date(),
      IntentosFallidos: 0,
    });

    await this.usuarioRepository.save(nuevoUsuario);

    return {
      Usuario: nuevoUsuario.Nombre,
      Resultado: true,
    };
  }
}
