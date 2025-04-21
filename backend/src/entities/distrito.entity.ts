import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Canton } from './canton.entity';
import { Provincia } from './provincia.entity';
import { Oferente } from './oferente.entity';
import { Empleado } from './empleado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('distrito')
export class Distrito {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdDistrito: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdCanton: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdProvincia: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty({ type: () => [Canton] })
  @ManyToOne(() => Canton, (canton) => canton.distritos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdCanton' })
  canton: Canton;

  @ApiProperty({ type: () => [Provincia] })
  @ManyToOne(() => Provincia, (provincia) => provincia.distritos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdProvincia' })
  provincia: Provincia;

  @ApiProperty({ type: () => [Oferente] })
  @OneToMany(() => Oferente, (oferente) => oferente.distrito)
  oferentes: Oferente[];

  @ApiProperty({ type: () => [Empleado] })
  @OneToMany(() => Empleado, (empleado) => empleado.distrito)
  empleados: Empleado[];
}
