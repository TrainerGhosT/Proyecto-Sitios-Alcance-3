import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('compania')
export class Compania {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdCompania: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;
}
