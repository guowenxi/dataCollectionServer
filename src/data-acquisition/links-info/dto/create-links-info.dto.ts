import { IsNotEmpty, Length, Max, Min } from "class-validator";
import { Column } from "typeorm";

export class CreateLinksInfoDto {

  id: number;

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  portNumber: number; // 端口号

  @Length(1, 20, { message: "IP地址在20个字符之内" })
  ipAddress: string; //	IP地址
}

export class CreateLinksInfoMqttDto {

  id: number;

  @Length(1, 20, { message: "名称在20个字符之内" })
  name: string; //	名称

  @Length(1, 20, { message: "Client ID在20个字符之内" })
  clientId: string; // Client ID

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  portNumber: number; // 端口号

  @Length(1, 20, { message: "IP地址在20个字符之内" })
  ipAddress: string; //	IP地址


  // @Length(1, 20,{ message: " path在20个字符之内" })
  // linksPath: string; // path


  @IsNotEmpty({ message: "请输入连接超时时长" })
  linksDuration: string; //	连接超时时长

  @IsNotEmpty({ message: "请输入Keep Alive" })
  keepAlive: string;

  @IsNotEmpty({ message: "请选择清除会话" })
  clearSession: string; //	清除会话

}
