import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Oferente } from './oferente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('teloferente')
export class TelOferente {
  @ApiProperty()
  @PrimaryColumn()
  IdOferente: number;

  @ApiProperty()
  @PrimaryColumn({ length: 20 })
  Telefono: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  TipoTelefono: string;

  @ApiProperty({ type: () => [Oferente] })
  @ManyToOne(() => Oferente, (oferente) => oferente.telefonos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdOferente' })
  oferente: Oferente;
}
