import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('bitacora')
export class Bitacora {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdBitacora: number;

  @ApiProperty()
  @Column({ nullable: true })
  IdUsuario: number;

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  Descripcion: string;

  @ApiProperty()
  @Column({ type: 'datetime', nullable: true })
  Fecha: Date;

  @ApiProperty()
  @Column({ length: 100, nullable: true })
  ModuloAfectado: string;

  @ApiProperty({ type: () => [Usuario] })
  @ManyToOne(() => Usuario, (usuario) => usuario.bitacoras, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdUsuario' })
  usuario: Usuario;
}
