import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from './rol.entity';
import { Usuario } from './usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('rolusuario')
export class RolUsuario {
  @ApiProperty()
  @PrimaryColumn()
  IdUsuario: number;

  @ApiProperty()
  @PrimaryColumn()
  IdRol: number;

  @ApiProperty({ type: () => [Rol] })
  @ManyToOne(() => Rol, (rol) => rol.usuarios, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdRol' })
  rol: Rol;

  @ApiProperty({ type: () => [Usuario] })
  @ManyToOne(() => Usuario, (usuario) => usuario.roles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdUsuario' })
  usuario: Usuario;
}
