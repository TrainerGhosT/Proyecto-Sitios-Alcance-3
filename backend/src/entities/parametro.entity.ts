import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('parametro')
export class Parametro {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdParametro: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ length: 100, nullable: true })
  Valor: string;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;
}
