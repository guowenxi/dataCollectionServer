import { IsNotEmpty, Length, Max, Min } from "class-validator";

export class CreateMessageForwardingDto {
  id: number;
}

export class CreateMessageForwardingWsDto extends CreateMessageForwardingDto {

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  portNumber: number; // 端口号
}

export class CreateMessageForwardingMqttDto extends CreateMessageForwardingDto {

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  portNumber: number; // 端口号

  @Length(1, 20,{ message: "IP地址在20个字符之内" })
  ipAddress: string; //	IP地址

  @Length(1, 20, { message: "用户名在20个字符之内" })
  username: string; //	用户名

  @Length(1, 20, { message: "密码在20个字符之内" })
  password: string; //	密码
}
