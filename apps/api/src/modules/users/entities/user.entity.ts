import { Column, CreateDateColumn, Entity } from 'typeorm';
import { AppBaseEntity } from '@/common/entities/app-base.entity.js';

@Entity()
export class User extends AppBaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;
}
