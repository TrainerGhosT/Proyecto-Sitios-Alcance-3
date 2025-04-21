import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('area')
export class Area {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdArea: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ nullable: true })
  IdJefatura: number;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;
}
