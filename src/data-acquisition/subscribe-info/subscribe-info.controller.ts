import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubscribeInfoService } from './subscribe-info.service';
import { CreateSubscribeInfoDto } from './dto/create-subscribe-info.dto';
import { UpdateSubscribeInfoDto } from './dto/update-subscribe-info.dto';
import { _RES } from '@util/response';

@Controller('subscribe-info')
export class SubscribeInfoController {
  constructor(private readonly subscribeInfoService: SubscribeInfoService) {
  }

  @Post('/create')
  async create(@Body() createSubscribeInfoDto: CreateSubscribeInfoDto) {
    const res = await this.subscribeInfoService.create(createSubscribeInfoDto);
    if (res.generatedMaps.length > 0) {
      return _RES(1, '添加成功');
    }
    return _RES(0, '添加失败');
  }

  @Get()
  async findAll(@Query('linksId') linksId: number) {
    const list = await this.subscribeInfoService.findAll(linksId);

    return _RES(1, '查询成功', list);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const subscribeInfo = await this.subscribeInfoService.findOne(id);
    if (!subscribeInfo) {
      return _RES(0, '订阅不存在');
    }
    return _RES(1, '查询成功', subscribeInfo);
  }

  @Post('update')
  async update(@Body() updateSubscribeInfoDto: UpdateSubscribeInfoDto) {
    const subscribeInfo = await this.subscribeInfoService.findOne(updateSubscribeInfoDto.id);
    if (subscribeInfo === null) {
      return _RES(0, '该id数据库中不存在');
    }

    const res = await this.subscribeInfoService.update(updateSubscribeInfoDto.id, updateSubscribeInfoDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, '修改成功');
    }
    return _RES(0, '修改失败');
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const res = await this.subscribeInfoService.remove(id);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, '修改成功');
    }
    return _RES(0, '修改失败');
  }
}
