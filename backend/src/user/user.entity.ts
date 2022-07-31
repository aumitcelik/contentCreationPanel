import { Exclude } from 'class-transformer';
//that we going to remove this property (password) from our response data.
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//Since we enabled synchronization in our TypeORM service, TypeORM will create a table based on this entity automatically.
import { Role } from '../enums/role.enum';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ nullable: true })
  @Exclude()
  refreshToken: string;

  @Column({ default: true })
  isActive: boolean;
}
