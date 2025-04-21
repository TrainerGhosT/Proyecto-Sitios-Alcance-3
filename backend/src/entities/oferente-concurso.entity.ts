import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Oferente } from './oferente.entity';
import { Concurso } from './concurso.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('oferenteconcurso')
export class OferenteConcurso {
  @ApiProperty()
  @PrimaryColumn()
  IdOferente: number;

  @ApiProperty()
  @PrimaryColumn()
  IdConcurso: number;

  @ApiProperty({ type: () => [Oferente] })
  @ManyToOne(() => Oferente, (oferente) => oferente.concursos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;

  @ApiProperty({ type: () => [Concurso] })
  @ManyToOne(() => Concurso, (concurso) => concurso.oferentesConcurso, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdConcurso' })
  concurso: Concurso;
}
