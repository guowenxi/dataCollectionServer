import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('agreement_info')
export class AgreementInfo extends RedundancyField { // 通讯协议信息表
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ name: 'module_id', nullable: true })
  moduleId: number; // 模块id


  @Column({ nullable: true, comment: '通讯协议编号' })
  code: number; // 通讯协议编号

  @Column({ nullable: true, comment: '通讯协议名称' })
  name: string; // 通讯协议名称


  @Column({ name: 'ip_address', nullable: true, comment: 'IP地址' })
  ipAddress: string; // IP地址

  @Column({ name: 'port_number', nullable: true, comment: '端口号' })
  portNumber: number; // 端口号

  @Column({ name: 'station_number', nullable: true, comment: '站号' })
  stationNumber: number; //	站号

  @Column({ name: 'acquisition_freq', nullable: true, comment: '采集频率' })
  acquisitionFreq: number; // 采集频率

  @Column({ name: 'serial_port', nullable: true, comment: '串口号' })
  serialPort: string; // 串口号

  @Column({ name: 'baud_rate', nullable: true, comment: '波特率' })
  baudRate: string; // 波特率

  @Column({ name: 'check_bit', nullable: true, comment: '校验位' })
  checkBit: string; // 校验位

  @Column({ name: 'data_bit', nullable: true, comment: '数据位' })
  dataBit: string; // 数据位

  @Column({ name: 'stop_bit', nullable: true, comment: '停止位' })
  stopBit: string; // 停止位

}

