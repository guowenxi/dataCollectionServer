import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { UserInfoService } from "./user-info.service";
import { CreateUserInfoDto } from "./dto/create-user-info.dto";
import { UpdateUserInfoDto } from "./dto/update-user-info.dto";
import { _RES, error, success } from "@util/response";
import { UpdateRoleInfoDto } from "@data-acquisition/role-info/dto/update-role-info.dto";

@Controller("user-info")
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {
  }

  @Post("/create")
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const res = await this.userInfoService.create(createUserInfoDto);
    if (res.identifiers.length > 0) {
      return success("添加成功");
    }
    return error("添加失败");
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get("findByRoleId")
  async findByRoleId(@Query("roleId") roleId: number) {
    const list = await this.userInfoService.findByRoleId(roleId);
    return _RES(1, "查询成功", list);
  }


  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userInfoService.findOne(+id);
  }


  @Post("/update")
  async update(@Body() updateUserInfoDto: UpdateUserInfoDto) {
    const role = await this.userInfoService.findOne(updateUserInfoDto?.id);
    if (!role) {
      return _RES(0, "该id数据库中不存在");
    }
    const res = await this.userInfoService.update(updateUserInfoDto?.id, updateUserInfoDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    const res = await this.userInfoService.remove(id);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "删除成功");
    }
    return _RES(0, "删除失败");
  }
}
