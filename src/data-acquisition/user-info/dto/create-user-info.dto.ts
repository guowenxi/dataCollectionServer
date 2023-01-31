import { Column } from "typeorm";
import { Length } from "class-validator";

export class CreateUserInfoDto {
  id: number;


  @Length(1, 20, {
    message: "请输入用户名称"
  })
  username: string; // 用户名称
}
