import { Length } from "class-validator";

export class CreateRoleInfoDto {
  id: number;

  @Length(1, 100, {
    message: "请输入角色名称"
  })
  roleName: string; // 角色名称
}
