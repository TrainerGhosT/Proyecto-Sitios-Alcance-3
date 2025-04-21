import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Oferente } from './oferente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('explaboral')
export class ExpLaboral {
    @ApiProperty()
  @PrimaryGeneratedColumn()
  IdExperiencia: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdOferente: number;

  @ApiProperty({ type: () => [Oferente]})
  @ManyToOne(() => Oferente, oferente => oferente.experienciasLaborales, { 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE' 
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}