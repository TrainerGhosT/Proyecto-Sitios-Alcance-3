import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Provincia } from './provincia.entity';
import { Distrito } from './distrito.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('canton')
export class Canton {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdCanton: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdProvincia: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty({ type: () => [Provincia] })
  @ManyToOne(() => Provincia, (provincia) => provincia.cantones, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdProvincia' })
  provincia: Provincia;

  @ApiProperty({ type: () => [Distrito] })
  @OneToMany(() => Distrito, (distrito) => distrito.canton)
  distritos: Distrito[];
}
