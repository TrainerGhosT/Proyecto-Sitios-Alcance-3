import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Oferente } from './oferente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('correooferente')
export class CorreoOferente {
    @ApiProperty()
  @PrimaryColumn()
  IdOferente: number;

  @ApiProperty()
  @PrimaryColumn({ length: 100 })
  Correo: string;

  @ApiProperty( { type: () => [Oferente] })
  @ManyToOne(() => Oferente, oferente => oferente.correos, { 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE' 
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}