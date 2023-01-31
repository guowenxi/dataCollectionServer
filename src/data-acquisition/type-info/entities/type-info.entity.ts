import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('type_info')
export class TypeInfo { // 字典表
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type_code' })
  typeCode: number; // 字典编号

  @Column({ name: 'type_name' })
  typeName: string; // 字典名称

  @Column({ name: 'type_class' })
  typeClass: string; // 字典标识

}
