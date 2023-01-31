import {
  Entity,
  Column,
  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity("user_info")
export class UserInfo extends RedundancyField { // 用户信息
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string; // 用户名称

  @Column()
  password: string; // 用户密码

  @Column()
  phone: string; // 手机号码

  @Column()
  roleId: number; // 角色id

}
