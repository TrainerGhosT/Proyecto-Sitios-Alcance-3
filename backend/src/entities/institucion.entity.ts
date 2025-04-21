import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Preparacion } from './preparacion.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('institucion')
export class Institucion {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdInstitucion: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @OneToMany(() => Preparacion, (preparacion) => preparacion.institucion)
  preparaciones: Preparacion[];
}
