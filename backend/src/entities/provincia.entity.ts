import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Canton } from './canton.entity';
import { Distrito } from './distrito.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('provincia')
export class Provincia {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdProvincia: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty({ type: () => [Canton] })
  @OneToMany(() => Canton, (canton) => canton.provincia)
  cantones: Canton[];

  @ApiProperty({ type: () => [Distrito] })
  @OneToMany(() => Distrito, (distrito) => distrito.provincia)
  distritos: Distrito[];
}
