import { Length } from "class-validator";

export class CreateMessageForwardingDto {

  id: number;


  @Length(1, 100, {
    message: "请输入端口号"
  })
  portNumber: number; // 端口号
}
