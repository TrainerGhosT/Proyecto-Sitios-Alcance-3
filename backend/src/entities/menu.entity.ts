import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Rol } from './rol.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('menu')
export class Menu {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdMenu: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty()
  @Column({ length: 200, nullable: false })
  Ruta: string;
  @ApiProperty({ type: () => [Rol] })
  @ManyToMany(() => Rol, (rol) => rol.menus)
  roles: Rol[];
}
