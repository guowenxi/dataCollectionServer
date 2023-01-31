import { IsString, IsInt, Length, IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class CreatePointPositionDto {
  id: number;

  moduleId: number; // 模块id

  @Length(1, 20, { message: "点位名在20个字符之内" })
  name: string; //	名称

  @IsNotEmpty({ message: "请选择点位类型" })
  pointType: number; // 点位类型

  @IsNotEmpty({ message: "请选择寄存器类型" })
  registerType: number; // 点位类型

  @Length(1, 5, { message: "点位地址在5个字符之内" })
  address: string; // 点位地址

  @IsNotEmpty({ message: "请选择数据类型" })
  dataType: number; // 数据类型

  convertRatio: string; // 线性转换(比例)

  convertBenchmark: string; // 线性转换(基准)
}
