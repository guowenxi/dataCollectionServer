import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { RoleInfoService } from './role-info.service';
import { CreateRoleInfoDto } from './dto/create-role-info.dto';
import { UpdateRoleInfoDto } from './dto/update-role-info.dto';
import { _PAGINATION, _RES, error, pagination, success } from '@util/response';
import { UserInfoService } from '@data-acquisition/user-info/user-info.service';

@Controller('role-info')
export class RoleInfoController {
  constructor(
    private readonly roleInfoService: RoleInfoService,
    private readonly userInfoService: UserInfoService,
  ) {
  }

  @Post('/create')
  async create(@Body() createRoleInfoDto: CreateRoleInfoDto) {
    const res = await this.roleInfoService.create(createRoleInfoDto);
    if (res.identifiers.length > 0) {
      return _RES(1, '添加成功');
    }
    return _RES(0, '添加失败');
  }


  @Get('list')
  async list() {
    const roles = await this.roleInfoService.list();
    return _RES(1, '查询成功', roles);
  }

  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
  ) {
    const [list, total] = await this.roleInfoService.findAll(current, pageSize);

    return _RES(1, '查询成功', _PAGINATION(list, total, current, pageSize));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const role = await this.roleInfoService.findOne(id);
    console.log(role);
    if (!role) {
      return _RES(0, '角色不存在');
    }
    return _RES(1, '查询成功', role);
  }

  @Post('/update')
  async update(@Body() updateRoleInfoDto: UpdateRoleInfoDto) {
    const role = await this.roleInfoService.findOne(updateRoleInfoDto?.id);
    if (!role) {
      return _RES(0, '该id数据库中不存在');
    }

    const res = await this.roleInfoService.update(updateRoleInfoDto?.id, updateRoleInfoDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, '修改成功');
    }
    return _RES(0, '修改失败');
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const role = await this.roleInfoService.findOne(id);
    if (!role) {
      return _RES(0, '该id数据库中不存在');
    }

    const user = await this.userInfoService.findByRoleId(id);
    if (user) {
      return _RES(0, '当前角色下有用户不能删除');
    }


    const res = await this.roleInfoService.remove(id);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, '删除成功');
    }
    return _RES(0, '删除失败');
  }

  @Post('/removeBatch')
  async removeBatch(@Body() ids: []) {
    const res = await this.roleInfoService.removeBatch(ids); // +id代表类型转换
    if (res.length > 0) { // 影响的行数
      return _RES(1, '删除成功');
    }
    return _RES(0, '删除失败');
  }
}
