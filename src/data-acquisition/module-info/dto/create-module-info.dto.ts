import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Length } from "class-validator";

export class CreateModuleInfoDto {
  @PrimaryGeneratedColumn()
  id: number;


  agreementCode: number; // 通讯协议编号

  agreementName: string; // 通讯协议名字

  @Length(1, 100, {
    message: "请输入模块名称"
  })
  name: string; // 模块名称

  createTime: Date; // 创建时间

  ipAddress: string; // IP地址

  moduleId: number; // 端口号

  portNumber: number; // 端口号


  stationNumber: number; //	站号

  acquisitionFreq: number; // 采集频率

  serialPort: string; // 串口号


  baudRate: string; // 波特率


  checkBit: string; // 校验位


  dataBit: string; // 数据位


  stopBit: string; // 停止位
}
