import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Menu } from './menu.entity';
import { Modulo } from './modulo.entity';
import { RolUsuario } from './rol-usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('rol')
export class Rol {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  IdRol: number;

  @ApiProperty()
  @Column({ length: 100, nullable: false })
  Nombre: string;

  @ApiProperty({ type: () => [Menu] })
  @ManyToMany(() => Menu, (menu) => menu.roles)
  @JoinTable({
    name: 'rolmenu',
    joinColumn: { name: 'IdRol', referencedColumnName: 'IdRol' },
    inverseJoinColumn: { name: 'IdMenu', referencedColumnName: 'IdMenu' },
  })
  menus: Menu[];

  @ApiProperty({ type: () => [Modulo] })
  @ManyToMany(() => Modulo, (modulo) => modulo.roles)
  @JoinTable({
    name: 'rolmodulo',
    joinColumn: { name: 'IdRol', referencedColumnName: 'IdRol' },
    inverseJoinColumn: { name: 'IdModulo', referencedColumnName: 'IdModulo' },
  })
  modulos: Modulo[];

  @ApiProperty({ type: () => [RolUsuario] })
  @OneToMany(() => RolUsuario, (rolUsuario) => rolUsuario.rol)
  usuarios: RolUsuario[];
}
