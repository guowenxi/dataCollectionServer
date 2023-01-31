import { IsInt, Length, Max, Min } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class CreateAgreementInfoDto {
  id: number;

  moduleId: number; // 模块id

  code: number; // 通讯协议编号

  @Length(1, 100, {
    message: "请选择通讯协议"
  })
  name: string; // 通讯协议名称


  ipAddress: string; // IP地址

  portNumber: number; // 端口号

  stationNumber: number; //	站号

  acquisitionFreq: number; // 采集频率

  serialPort: string; // 串口号

  baudRate: string; // 波特率

  checkBit: string; // 校验位

  dataBit: string; // 数据位

  stopBit: string; // 停止位


  createTime: Date; // 创建时间

  updateTime: Date; // 修改时间

  deleteTime: Date; // 删除时间

  isDelete: number;  // 删除标识
}
