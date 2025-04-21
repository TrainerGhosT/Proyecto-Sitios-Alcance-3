import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Distrito } from './distrito.entity';
import { CorreoOferente } from './correo-oferente.entity';
import { TelOferente } from './tel-oferente.entity';
import { ExpLaboral } from './exp-laboral.entity';
import { OferenteConcurso } from './oferente-concurso.entity';
import { Preparacion } from './preparacion.entity';
import { Entrevista } from './entrevista.entity';
import { Referencia } from './referencia.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('oferente')
export class Oferente {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdOferente: number;

  @ApiProperty()
  @Column({ length: 20, nullable: false })
  Identificacion: string;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ length: 200, nullable: true })
  Direccion: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  TipoIdentificacion: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  FechaNacimiento: Date;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  EstadoCivil: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  Nacionalidad: string;

  @ApiProperty()
  @Column({ nullable: true })
  IdDistrito: number;

  @ApiProperty()
  @Column({ length: 300, nullable: true })
  Curriculum: string;

  @ApiProperty({ type: () => [Distrito] })
  @ManyToOne(() => Distrito, (distrito) => distrito.oferentes, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdDistrito' })
  distrito: Distrito;

  @ApiProperty({ type: () => [CorreoOferente] })
  @OneToMany(() => CorreoOferente, (correoOferente) => correoOferente.oferente)
  correos: CorreoOferente[];

  @ApiProperty({ type: () => [TelOferente] })
  @OneToMany(() => TelOferente, (telOferente) => telOferente.oferente)
  telefonos: TelOferente[];

  @ApiProperty({ type: () => [ExpLaboral] })
  @OneToMany(() => ExpLaboral, (expLaboral) => expLaboral.oferente)
  experienciasLaborales: ExpLaboral[];

  @ApiProperty({ type: () => [OferenteConcurso] })
  @OneToMany(
    () => OferenteConcurso,
    (oferenteConcurso) => oferenteConcurso.oferente,
  )
  concursos: OferenteConcurso[];

  @ApiProperty({ type: () => [Preparacion] })
  @OneToMany(() => Preparacion, (preparacion) => preparacion.oferente)
  preparaciones: Preparacion[];

  @ApiProperty({ type: () => [Entrevista] })
  @OneToMany(() => Entrevista, (entrevista) => entrevista.oferente)
  entrevistas: Entrevista[];

  @ApiProperty({ type: () => [Referencia] })
  @OneToMany(() => Referencia, (referencia) => referencia.oferente)
  referencias: Referencia[];
}
