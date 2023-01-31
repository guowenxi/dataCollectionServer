import { IsNotEmpty, Length } from "class-validator";
import { Column } from "typeorm";

export class CreateSubscribeInfoDto {
  id: number;

  @Length(1, 20, { message: "Topic在20个字符之内" })
  topic: string;

  @IsNotEmpty({ message: "请选择Qos" })
  qos: number; //

  @IsNotEmpty({ message: "请选择标记" })
  sign: string; // 标记

}
