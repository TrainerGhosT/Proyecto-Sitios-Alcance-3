import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('explaboralempleado')
export class ExpLaboralEmpleado {
  @ApiProperty()
  @PrimaryColumn()
  IdExperiencia: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdEmpleado: number;

  @ApiProperty({ type: () => [Empleado] })
  @ManyToOne(() => Empleado, (empleado) => empleado.experienciasLaborales)
  @JoinColumn({ name: 'IdEmpleado' })
  empleado: Empleado;
}
