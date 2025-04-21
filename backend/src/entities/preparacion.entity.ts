import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Oferente } from './oferente.entity';
import { Institucion } from './institucion.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('preparacion')
export class Preparacion {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdPreparacion: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdOferente: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Institucion: string;

  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaInicio: Date;

  @ApiProperty()
  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaFin: Date;

  @ApiProperty()
  @Column({ nullable: true })
  IdInstitucion: number;

  @ApiProperty( { type: () => [Institucion] })
  @ManyToOne(() => Institucion, (institucion) => institucion.preparaciones, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdInstitucion' })
  institucion: Institucion;

  @ApiProperty( { type: () => [Oferente]})
  @ManyToOne(() => Oferente, (oferente) => oferente.preparaciones, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}
