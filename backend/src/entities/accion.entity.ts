import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('accion')
export class Accion {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdAccion: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdEmpleado: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdJefatura: number;

  @ApiProperty()
  @Column({ type: 'datetime', nullable: true })
  Fecha: Date;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  TipoAccion: string;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Observaciones: string;

  @ApiProperty({ type: () => [Empleado] })
  @ManyToOne(() => Empleado, (empleado) => empleado.acciones, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdEmpleado' })
  empleado: Empleado;
}
