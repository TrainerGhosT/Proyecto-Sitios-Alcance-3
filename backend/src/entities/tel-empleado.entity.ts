import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('telempleado')
export class TelEmpleado {
    @ApiProperty()
  @PrimaryColumn()
  IdEmpleado: number;

  @ApiProperty()
  @Column({ length: 20, nullable: false })
  Telefono: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  TipoTelefono: string;

  @ApiProperty( { type: () => [Empleado] })
  @OneToOne(() => Empleado, empleado => empleado.telefono)
  @JoinColumn({ name: 'IdEmpleado' })
  empleado: Empleado;
}