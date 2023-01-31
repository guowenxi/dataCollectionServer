import { Length } from "class-validator";

export class CreateSubscribeInfoDto {
  id: number;


  @Length(1, 100, {
    message: '请输入Topic',
  })
  topic: string;

  @Length(1, 20, {
    message: '请选择标记',
  })
  sign: string;
}
