import { Length } from "class-validator";

export class CreateLinksInfoDto {
  id: number;

  @Length(1, 100, {
    message: "请输入IP地址"
  })
  ipAddress: string; //	IP地址

  @Length(1, 100, {
    message: "请输入端口号"
  })
  portNumber: string; //	端口号
}
