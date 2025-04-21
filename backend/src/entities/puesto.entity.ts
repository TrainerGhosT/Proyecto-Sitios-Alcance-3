import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Empleado } from './empleado.entity';
import { Requisito } from './requisito.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('puesto')
export class Puesto {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdPuesto: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  Salario: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdJefatura: number;

  @ApiProperty()
  @Column({ length: 30, nullable: true })
  Estado: string;

  @ApiProperty({ type: () => [Empleado] })
  @OneToMany(() => Empleado, (empleado) => empleado.puesto)
  empleados: Empleado[];

  @ApiProperty({ type: () => [Requisito] })
  @OneToMany(() => Requisito, (requisito) => requisito.puesto)
  requisitos: Requisito[];
}
