import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity({
  name: 'subscribe_info',
})
export class SubscribeInfo extends RedundancyField { // 订阅信息
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'links_id', nullable: true, comment: '连接id' })
  linksId: number; //	连接id

  @Column({ name: 'topic', nullable: true, comment: 'Topic' })
  topic: string; // Topic


  @Column({ name: 'qos', nullable: true, comment: '' })
  qos: number; //


  @Column({ name: 'sign', nullable: true, comment: '标记' })
  sign: string; // 标记

  @Column({ name: 'alias', nullable: true, comment: '别名' })
  alias: string; // 别名

}
