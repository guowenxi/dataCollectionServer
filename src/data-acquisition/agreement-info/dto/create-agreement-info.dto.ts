import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class CreateAgreementInfoDto {
  id: number;

  moduleId: number; // 模块id

  code: number; // 协议类型编号

  name: string; // 协议类型名称

  @Length(1, 20, { message: "IP地址在20个字符之内" })
  ipAddress: string; // IP地址

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  portNumber: number; // 端口号

  @Min(1,{ message: "站号在5个字符之内" })
  @Max(65535,{ message: "站号在5个字符之内" })
  stationNumber: number; //	站号

  @Min(1,{ message: "采集频率在5个字符之内" })
  @Max(1000,{ message: "采集频率在5个字符之内" })
  acquisitionFreq: number; // 采集频率

  @IsNotEmpty({ message: "请选择串口号" })
  serialPort: number; // 串口号

  @IsNotEmpty({ message: "请选择波特率" })
  baudRate: number; // 波特率

  @IsNotEmpty({ message: "请选择校验位" })
  checkBit: number; // 校验位

  @IsNotEmpty({ message: "请选择数据位" })
  dataBit: number; // 数据位

  @IsNotEmpty({ message: "请选择停止位" })
  stopBit: number; // 停止位


  createTime: Date; // 创建时间

  updateTime: Date; // 修改时间

  deleteTime: Date; // 删除时间

  isDelete: number;  // 删除标识
}
