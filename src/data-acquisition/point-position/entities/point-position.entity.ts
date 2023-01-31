import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity('point_position')
export class PointPosition extends RedundancyField { // 点位表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'module_id', nullable: true, comment: '模块id' })
  moduleId: number; // 模块id

  @Column({ name: 'equipment_id', nullable: true, comment: '设备id' })
  equipmentId: number; // 设备id

  @Column({ nullable: true, comment: '点位名称' })
  name: string; // 点位名称

  @Column({ name: 'point_type', nullable: true, comment: '点位类型' })
  pointType: number; // 点位类型

  @Column({ name: 'register_type', nullable: true, comment: '寄存器类型' })
  registerType: number; // 寄存器类型

  @Column({ name: 'data_type', nullable: true, comment: '数据类型' })
  dataType: number; // 数据类型

  @Column({ name: 'convert_ratio', nullable: true, comment: '线性转换(比例)' })
  convertRatio: string; // 线性转换(比例)

  @Column({ name: 'convert_benchmark', nullable: true, comment: '线性转换(基准)' })
  convertBenchmark: string; // 线性转换(基准)

  @Column({ nullable: true, comment: '单位' })
  unit: string; // 单位

  @Column({ nullable: true, comment: '点位地址' })
  address: string; // 点位地址

  @Column({ nullable: true, comment: '点位说明' })
  explain: string;  // 点位说明

  @Column({ nullable: true, comment: '值' })
  value: string; // 值

  @Column({ name: 'quality_stamp', nullable: true, comment: '质量戳' })
  qualityStamp: string; // 质量戳

}
