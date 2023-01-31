import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('interface_type_info')
export class InterfaceTypeInfo extends RedundancyField { // 第三方接口字典表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'parent_id', nullable: true, comment: '父级id' })
  parentId: number; // 父级id

  @Column({ name: 'type_name', nullable: true, comment: '类型名称' })
  typeName: string; // 类型名称

  @Column({ name: 'type_level', default: true, comment: '类型级别' })
  typeLevel: number; // 类型级别

  @Column({ name: 'request_mode', nullable: true, default: 'POST', comment: '请求方式' })
  requestMode: string; // 请求方式

  @Column({ name: 'request_url', nullable: true, comment: '请求URL' })
  requestUrl: string; // 请求URL
}
