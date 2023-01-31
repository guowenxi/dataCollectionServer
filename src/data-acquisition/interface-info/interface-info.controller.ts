import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { InterfaceInfoService } from './interface-info.service';
import { CreateInterfaceInfoDto } from './dto/create-interface-info.dto';
import { UpdateInterfaceInfoDto } from './dto/update-interface-info.dto';
import { error, pagination, success } from '@util/response';


@Controller('interface-info')
export class InterfaceInfoController {
  constructor(private readonly interfaceInfoService: InterfaceInfoService) {
  }

  @Post('create')
  async create(@Body() createInterfaceInfoDto: CreateInterfaceInfoDto) {
    const res = await this.interfaceInfoService.create(createInterfaceInfoDto);
    if (res.identifiers.length > 0) {
      return success('添加成功');
    }
    return error('添加失败');
  }

  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('interfaceName') interfaceName: string,
    @Query('interfaceType') interfaceType: number,
    @Query('interfaceStatus') interfaceStatus: number,
  ) {
    const [list, total] = await this.interfaceInfoService.findAll(current, pageSize, interfaceName, interfaceType, interfaceStatus);

    return success('查询成功', pagination(list, total, current, pageSize));
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const interfaceInfo = await this.interfaceInfoService.findOne(id);
    if (!interfaceInfo) {
      return error('接口不存在');
    }
    return success('', interfaceInfo);
  }


  @Post('/update')
  async update(@Body() updateInterfaceInfoDto: UpdateInterfaceInfoDto) {

    const interfaceInfo = await this.interfaceInfoService.findOne(updateInterfaceInfoDto.id);
    if (!interfaceInfo) {
      return error('接口不存在');
    }

    const res = await this.interfaceInfoService.update(updateInterfaceInfoDto.id, updateInterfaceInfoDto);
    if (res.affected > 0) { // 影响的行数
      return success("修改成功");
    }
    return error("修改失败");
  }




  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const interfaceInfo = await this.interfaceInfoService.findOne(id);
    if (!interfaceInfo) {
      return error('该id数据库中不存在');
    }
    const res = await this.interfaceInfoService.remove(id);
    if (res.affected > 0) { // 影响的行数
      return success('删除成功');
    }
    return error('删除失败');
  }
}
