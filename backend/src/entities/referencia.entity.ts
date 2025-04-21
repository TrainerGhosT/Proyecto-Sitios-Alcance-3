import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Oferente } from './oferente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('referencias')
export class Referencia {
 
    @ApiProperty()
  @Column({ length: 100, nullable: true })
  Nombre: string;

  @ApiProperty()
  @PrimaryColumn({ length: 50 })
  Telefono: string;

  @ApiProperty()
  @PrimaryColumn()
  IdOferente: number;

  @ApiProperty({ type: () => [Oferente] })
  @ManyToOne(() => Oferente, oferente => oferente.referencias, { 
    onDelete: 'CASCADE' 
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}