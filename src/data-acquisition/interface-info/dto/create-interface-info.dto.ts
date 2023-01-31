import { Length } from "class-validator";

export class CreateInterfaceInfoDto {
  @Length(1, 100, {
    message: "请输入接口名称"
  })
  name: string; // 接口名称
}
