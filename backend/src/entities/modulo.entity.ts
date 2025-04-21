import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Rol } from './rol.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('modulo')
export class Modulo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdModulo: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;

  @ApiProperty({ type: () => [Rol] })
  @ManyToMany(() => Rol, (rol) => rol.modulos)
  roles: Rol[];
}
