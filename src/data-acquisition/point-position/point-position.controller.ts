import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { success, error, pagination, _PAGINATION, _RES } from '../../util/response';
import { PointPositionService } from './point-position.service';
import { CreatePointPositionDto } from './dto/create-point-position.dto';
import { UpdatePointPositionDto } from './dto/update-point-position.dto';


@Controller('point-position')
export class PointPositionController {
  constructor(private readonly pointPositionService: PointPositionService) {
  }

  @Post('/create')
  async create(@Body() createPointPositionDto: CreatePointPositionDto) {
    const res = await this.pointPositionService.create(createPointPositionDto);
    if (res.generatedMaps.length > 0) {
      return _RES(1, '添加成功');
    }
    return _RES(0, '添加失败');
  }

  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('name') name: string,
    @Query('moduleId') moduleId: number,
  ) {
    const [list, total] = await this.pointPositionService.findAll(current, pageSize, name, moduleId);

    return _RES(1, '查询成功', _PAGINATION(list, total, current, pageSize));
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const pointPosition = await this.pointPositionService.findOne(id);
    if (!pointPosition) {
      return _RES(0, '点位不存在');
    }
    return _RES(1, '查询成功', pointPosition);
  }

  @Post('update')
  async update(@Body() updatePointPositionDto: UpdatePointPositionDto) {

    const pointPosition = await this.pointPositionService.findOne(updatePointPositionDto.id);
    if (pointPosition === null) {
      return _RES(0, '该id数据库中不存在');
    }

    const res = await this.pointPositionService.update(updatePointPositionDto.id, updatePointPositionDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, '修改成功');
    }
    return _RES(0, '修改失败');
  }

  @Post('delete')
  async remove(
    @Body('ids') ids: [],
  ) {
    const res = await this.pointPositionService.remove(ids); // +id代表类型转换
    if (res.length > 0) { // 影响的行数
      return _RES(1, '删除成功');
    }
    return _RES(0, '删除失败');
  }
}
