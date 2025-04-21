import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabase } from '../../database/config.db';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Usuario } from '../../entities/usuario.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [ TypeOrmModule]
})
export class AuthModule {}