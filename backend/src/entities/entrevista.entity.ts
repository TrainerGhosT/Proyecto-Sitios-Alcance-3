import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Oferente } from './oferente.entity';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('entrevista')
export class Entrevista {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdEntrevista: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdOferente: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdEmpleado: number;

  @ApiProperty()
  @Column({ type: 'datetime', nullable: true })
  Fecha: Date;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  Estado: string;

  @ApiProperty()
  @Column({ length: 200, nullable: true })
  Resultado: string;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Observaciones: string;

  @ApiProperty({ type: () => [Empleado] })
  @ManyToOne(() => Empleado, (empleado) => empleado.entrevistas, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdEmpleado' })
  empleado: Empleado;

  @ApiProperty({ type: () => [Oferente] })
  @ManyToOne(() => Oferente, (oferente) => oferente.entrevistas, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}
