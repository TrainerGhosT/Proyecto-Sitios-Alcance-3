import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Puesto } from './puesto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('requisito')
export class Requisito {
@ApiProperty()
  @PrimaryGeneratedColumn()
  IdRequisito: number;
@ApiProperty()
  @Column({ nullable: true })
  IdPuesto: number;
@ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;
@ApiProperty()
  @Column({ length: 50, nullable: true })
  Tipo: string;
@ApiProperty({ type: () => [Puesto] })
  @ManyToOne(() => Puesto, puesto => puesto.requisitos, { 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE' 
  })
  @JoinColumn({ name: 'IdPuesto' })
  puesto: Puesto;
}