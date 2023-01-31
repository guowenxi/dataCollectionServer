import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class RedundancyField {

  @CreateDateColumn({ name: 'create_time', type: 'datetime', comment: '创建时间', select: false })
  createTime: Date; // 创建时间

  @UpdateDateColumn({ name: 'update_time', type: 'datetime', comment: '修改时间', select: false })
  updateTime: Date; // 修改时间

  @DeleteDateColumn({ name: 'delete_time', type: 'datetime', comment: '删除时间', select: false })
  deleteTime: Date; // 删除时间

  @Column({ name: 'is_delete', comment: '删除标识', select: false, default: 0 })
  isDelete: number;  // 删除标识
}
