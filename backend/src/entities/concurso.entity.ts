import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OferenteConcurso } from './oferente-concurso.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('concurso')
export class Concurso {
    @ApiProperty()
  @PrimaryGeneratedColumn()
  IdConcurso: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaInicio: Date;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaFin: Date;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  Estado: string;

  @ApiProperty( { type: () => [OferenteConcurso] })
  @OneToMany(() => OferenteConcurso, oferenteConcurso => oferenteConcurso.concurso)
  oferentesConcurso: OferenteConcurso[];
}