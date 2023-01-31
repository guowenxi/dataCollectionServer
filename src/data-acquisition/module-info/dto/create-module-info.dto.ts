import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class CreateModuleInfoDto {
  @PrimaryGeneratedColumn()
  id: number;


  @Length(1, 20, { message: "模块名称在20个字符之内" })
  name: string; // 模块名称

  @IsNotEmpty({ message: "请选择协议类型" })
  agreementCode: number; // 协议类型编号

  agreementName: string; // 协议类型名字


  createTime: Date; // 创建时间

  ipAddress: string; // IP地址

  moduleId: number;

  portNumber: number; // 端口号


  stationNumber: number; //	站号

  acquisitionFreq: number; // 采集频率

  serialPort: string; // 串口号


  baudRate: string; // 波特率


  checkBit: string; // 校验位


  dataBit: string; // 数据位


  stopBit: string; // 停止位
}
