import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('correoempleado')
export class CorreoEmpleado {
  @ApiProperty()
  @PrimaryColumn()
  IdEmpleado: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Correo: string;

  @ApiProperty({ type: () => [Empleado] })
  @OneToOne(() => Empleado, (empleado) => empleado.correo)
  @JoinColumn({ name: 'IdEmpleado' })
  empleado: Empleado;
}
