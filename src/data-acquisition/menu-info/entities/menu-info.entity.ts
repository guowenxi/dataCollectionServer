import { RedundancyField } from '@modules/entities/RedundancyField';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu_info')
export class MenuInfo extends RedundancyField {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: 'menu_json', type: 'text', nullable: true, comment: '菜单JSON' })
  menuJson: string; // 菜单JSON
}
