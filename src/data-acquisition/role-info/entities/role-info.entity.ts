import {
  Entity,
  Column,
  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('role_info')
export class RoleInfo extends RedundancyField { // 角色表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_name', comment: '角色名称' })
  roleName: string; // 角色名称

  @Column({ name: 'operation_authority', comment: '操作权限' })
  operationAuthority: number; // 操作权限

  @Column({ name: 'jurisdiction_deadline', comment: '权限期限' })
  jurisdictionDeadline: string; // 权限期限

  @Column({ default: 1, comment: '停用启用状态' })
  status: number; // 停用启用状态

  @Column({ name: 'page_authority', type:'varchar' ,comment: '页面权限' })
  pageAuthority: string; // 页面权限

  // @Column({ name: 'select_menu_ids', comment: '选中的菜单id' })
  // selectMenuIds: number; // 选中的菜单id

}
