import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bitacora } from './bitacora.entity';
import { RolUsuario } from './rol-usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('usuario')
export class Usuario {
    @ApiProperty()
  @PrimaryGeneratedColumn()
  IdUsuario: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Correo: string;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Contrasenia: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  Estado: string;

  @ApiProperty()
  @Column({ type: 'datetime', nullable: true })
  FechaCreacion: Date;

  @ApiProperty()
  @Column({ type: 'datetime', nullable: true })
  UltimoAcceso: Date;

  @ApiProperty()
  @Column({ nullable: true })
  IntentosFallidos: number;

  @ApiProperty({ type: () => [Bitacora] })
  @OneToMany(() => Bitacora, bitacora => bitacora.usuario)
  bitacoras: Bitacora[];

  @ApiProperty({ type: () => [RolUsuario] })
  @OneToMany(() => RolUsuario, rolUsuario => rolUsuario.usuario)
  roles: RolUsuario[];
}