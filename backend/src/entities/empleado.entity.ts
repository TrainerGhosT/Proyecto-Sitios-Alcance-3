import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Puesto } from './puesto.entity';
import { Distrito } from './distrito.entity';
import { CorreoEmpleado } from './correo-empleado.entity';
import { TelEmpleado } from './tel-empleado.entity';
import { Accion } from './accion.entity';
import { Entrevista } from './entrevista.entity';
import { ExpLaboralEmpleado } from './exp-laboral-empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('empleado')
export class Empleado {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdEmpleado: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ nullable: true, name: 'Puesto' })
  PuestoId: number;

  @ApiProperty()
  @Column({ length: 200, nullable: true })
  Direccion: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  TipoIdentificacion: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaNacimiento: Date;

  @Column({ length: 50, nullable: true })
  EstadoCivil: string;

  @Column({ length: 50, nullable: true })
  Nacionalidad: string;

  @Column({ nullable: true })
  IdDistrito: number;

  @ApiProperty({ type: () => [Puesto] })
  @ManyToOne(() => Puesto, (puesto) => puesto.empleados)
  @JoinColumn({ name: 'Puesto' })
  puesto: Puesto;

  @ApiProperty({ type: () => [Distrito] })
  @ManyToOne(() => Distrito, (distrito) => distrito.empleados)
  @JoinColumn({ name: 'IdDistrito' })
  distrito: Distrito;

  @ApiProperty({ type: () => [CorreoEmpleado] })
  @OneToOne(() => CorreoEmpleado, (correoEmpleado) => correoEmpleado.empleado)
  correo: CorreoEmpleado;

  @ApiProperty({ type: () => [TelEmpleado] })
  @OneToOne(() => TelEmpleado, (telEmpleado) => telEmpleado.empleado)
  telefono: TelEmpleado;

  @ApiProperty({ type: () => [Accion] })
  @OneToMany(() => Accion, (accion) => accion.empleado)
  acciones: Accion[];

  @ApiProperty({ type: () => [Entrevista] })
  @OneToMany(() => Entrevista, (entrevista) => entrevista.empleado)
  entrevistas: Entrevista[];

  @ApiProperty({ type: () => [ExpLaboralEmpleado] })
  @OneToMany(
    () => ExpLaboralEmpleado,
    (expLaboralEmpleado) => expLaboralEmpleado.empleado,
  )
  experienciasLaborales: ExpLaboralEmpleado[];
}
