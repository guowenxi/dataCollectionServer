import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToOne, JoinColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';
import { InterfaceInfo } from '@data-acquisition/interface-info/entities/interface-info.entity';

@Entity({
  name:'brand_info'
})
export class BrandInfo extends RedundancyField { // 品牌信息表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'interface_id', nullable: true , comment: '接口id'})
  interfaceId: number; //	接口id

  @Column({ name: 'brand_code', nullable: true , comment: '品牌编号'})
  brandCode: number; // 品牌名称

  @Column({ name: 'brand_name', nullable: true, comment: '品牌名称' })
  brandName: string; // 编号

  @Column({ name: 'verson_number', nullable: true , comment: '版本号'})
  versionNumber: number; //	版本号

  @Column({ name: 'function_type', nullable: true, comment: '功能类别' })
  functionType: number; // 功能类别

  @Column({ name: 'ip_address', nullable: true , comment: 'ip地址'})
  ipAddress: string; // ip地址

  @Column({ name: 'port_number', nullable: true, comment: '端口号' })
  portNumber: number; // 端口号

  @Column({ name: 'user_name', nullable: true, comment: '用户名' })
  userName: string; // 用户名

  @Column({ name: 'user_password', nullable: true , comment: '密码'})
  userPassword: string; // 密码

  @Column({ name: 'empower_code', nullable: true, comment: '授权码' })
  empowerCode: string; // 授权码

  @Column({ name: 'secret_key', nullable: true , comment: '秘钥'})
  secretKey: string; // 秘钥

  @Column({ name: 'is_status', nullable: true , comment: '是否启用https'})
  isStatus: number; // 是否启用https
}
