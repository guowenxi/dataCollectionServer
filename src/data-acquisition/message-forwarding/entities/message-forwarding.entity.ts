import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RedundancyField } from "@modules/entities/RedundancyField";

@Entity({
  name: "message_forwarding"
})
export class MessageForwarding extends RedundancyField { // 消息转发


  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'service_name', nullable: true, comment: '服务器名称' })
  serviceName: string; //	服务器名称

  @Column({ name: 'service_type', nullable: true, default: 1 ,comment: '服务器类型 1:Websocket服务器，2:MQTT服务器' })
  serviceType: number; //	服务器类型

  @Column({ name: 'ip_address', nullable: true, comment: 'IP地址' })
  ipAddress: string; //	IP地址


  @Column({ name: 'port_number', nullable: true, comment: '端口号' })
  portNumber:number; //	端口号


  @Column({ name: 'username', nullable: true, comment: '用户名' })
  username: string; //	用户名

  @Column({ name: 'password', nullable: true, comment: '密码' })
  password: string; //	密码


  @Column({ name: 'status', default: 'default',nullable: true, comment: '连接状态' })
  status: string; //	连接状态

  @Column({ name: 'statusName',default: '已停用', nullable: true, comment: '连接状态名' })
  statusName: string; //	连接状态名
}
