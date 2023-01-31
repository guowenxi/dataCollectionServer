import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RedundancyField } from '@modules/entities/RedundancyField';

@Entity({
  name: 'links_info',
})
export class LinksInfo extends RedundancyField { // 连接信息
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: true, comment: '名称' })
  name: string; //	名称

  @Column({ name: 'links_type', nullable: true, comment: '连接类型' })
  linksType: number; //	连接类型

  @Column({ name: 'client_id', nullable: true, comment: '客户端id' })
  clientId: string; // 客户端id

  @Column({ name: 'mqtt_type', nullable: true, comment: '协议类型' })
  mqttType: string; //	协议类型

  @Column({ name: 'ip_address', nullable: true, comment: 'IP地址' })
  ipAddress: string; //	IP地址

  @Column({ name: 'port_number', nullable: true, comment: '端口号' })
  portNumber: string; //	端口号

  @Column({ name: 'links_path', nullable: true, comment: '挂载目录' })
  linksPath: string; // 挂载目录


  @Column({ name: 'username', nullable: true, comment: '用户名' })
  username: string; //	用户名

  @Column({ name: 'password', nullable: true, comment: '密码' })
  password: string; //	密码

  @Column({ name: 'links_duration', nullable: true, comment: '连接超时时长' })
  linksDuration: string; //	连接超时时长

  @Column({ name: 'keep_alive', nullable: true, comment: '' })
  keepAlive: string;

  @Column({ name: 'clear_session', nullable: true, comment: '清除会话' })
  clearSession: string; //	清除会话
}

