import { Column } from "typeorm";
import { IsNotEmpty, Length, IsMobilePhone } from "class-validator";

export class CreateUserInfoDto {
  id: number;

  @Length(1, 20, { message: "用户姓名在20个字符之内" })
  username: string; // 用户姓名

  @IsNotEmpty({ message: "请选择所属角色" })
  roleId;

  @IsMobilePhone("zh-CN", { message: "手机号码格式错误" },{message: "手机号码格式错误" })
  phone: string; // 手机号码


  @Length(8, 16, { message: "用户密码在8到16个字符之内" })
  password: string; // 用户密码

}
