import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('agreement_info')
export class AgreementInfo extends RedundancyField { // 协议类型信息表
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ name: 'module_id', nullable: true })
  moduleId: number; // 模块id


  @Column({ nullable: true, comment: '协议类型编号' })
  code: number; // 协议类型编号

  @Column({ nullable: true, comment: '协议类型名称' })
  name: string; // 协议类型名称


  @Column({ name: 'ip_address', nullable: true, comment: 'IP地址' })
  ipAddress: string; // IP地址

  @Column({ name: 'port_number', nullable: true, comment: '端口号' })
  portNumber: number; // 端口号

  @Column({ name: 'station_number', nullable: true, comment: '站号' })
  stationNumber: number; //	站号

  @Column({ name: 'acquisition_freq', nullable: true, default: 1000,comment: '采集频率' })
  acquisitionFreq: number; // 采集频率

  @Column({ name: 'serial_port', nullable: true, comment: '串口号' })
  serialPort: number; // 串口号

  @Column({ name: 'baud_rate', nullable: true, comment: '波特率' })
  baudRate: number; // 波特率

  @Column({ name: 'check_bit', nullable: true, comment: '校验位' })
  checkBit: number; // 校验位

  @Column({ name: 'data_bit', nullable: true, comment: '数据位' })
  dataBit: number; // 数据位

  @Column({ name: 'stop_bit', nullable: true, comment: '停止位' })
  stopBit: number; // 停止位

  @Column({ name: 'subent_address', nullable: true, comment: '子网掩码' })
  subentAddress: string; // 子网掩码
}

