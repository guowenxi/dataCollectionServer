import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('module_info')
export class ModuleInfo extends RedundancyField { // 模块表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'agreement_code',nullable: true, comment: '协议类型编号' })
  agreementCode: number; // 协议类型编号

  @Column({ nullable: true, comment: '模块名称' })
  name: string; // 模块名称

  @Column({ default: 2, comment: '模块状态' })
  status: number; // 模块状态
}
