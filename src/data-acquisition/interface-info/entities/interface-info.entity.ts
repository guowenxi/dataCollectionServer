import {
  Entity,
  Column,
  PrimaryGeneratedColumn, OneToOne, JoinColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';
import { BrandInfo } from '@data-acquisition/brand-info/entities/brand-info.entity';

@Entity('interface_info')
export class InterfaceInfo extends RedundancyField { // 接口信息表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, comment: '接口名称' })
  name: string; // 接口名称

  @Column({ name: 'brand_code', nullable: true, comment: '品牌编号' })
  brandCode: number; //	品牌编号

  @Column({ name: 'verson_number', nullable: true, comment: '版本' })
  versionNumber: number; // 版本

  @Column({ name: 'function_type', nullable: true, comment: '功能类别' })
  functionType: number; // 功能类别

  @Column({ name: 'function_option', nullable: true, comment: '功能选项' })
  functionOption: number; // 功能选项

  @Column({ name: 'interface_type', nullable: true, comment: '接口类型: 1-第三方平台接口；2-data-acquisition接口' })
  interfaceType: number; // 接口类型

  @Column({ name: 'interface_status', nullable: false, comment: '接口状态', default: 2 })
  interfaceStatus: number; // 接口状态

  @Column({ name: 'service_ip', nullable: true, comment: '服务ip' })
  serviceIp: string; // 服务ip

  @Column({ name: 'service_port', nullable: true, comment: '服务端口' })
  servicePort: string; // 服务端口

  @Column({ name: 'json_code', nullable: true, comment: '请求参数(json)' })
  jsonCode: string; // 请求参数(json)

  @Column({ name: 'debug_result', nullable: true, select: false, comment: '请求结果' })
  debugResult: string; // 请求结果
}
