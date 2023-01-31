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
import { error, pagination, success } from '@util/response';
import { ModuleInfoService } from './module-info.service';
import { CreateModuleInfoDto } from './dto/create-module-info.dto';
import { UpdateModuleInfoDto } from './dto/update-module-info.dto';
import { CreateAgreementInfoDto } from '@data-acquisition/agreement-info/dto/create-agreement-info.dto';
import { UpdateAgreementInfoDto } from '@data-acquisition/agreement-info/dto/update-agreement-info.dto';
import { PointPositionService } from '@data-acquisition/point-position/point-position.service';


@Controller('module-info')
export class ModuleInfoController {
  constructor(
    private readonly moduleInfoService: ModuleInfoService,
    private readonly pointPositionService: PointPositionService,
  ) {
  }

  @Post('/create')
  async create(@Body() data: any) {
    const moduleInfo = await this.moduleInfoService.findByModuleName(data.createModuleInfoDto.name);
    if (moduleInfo) {
      return error('模块名字已存在，换个再试试');
    }

    const res = await this.moduleInfoService.create(data.createModuleInfoDto, data.createAgreementInfoDto);
    if (res.length > 0) {
      return success('添加成功');
    }
    return error('添加失败');
  }

  @Get()
  async findAll(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('moduleName') moduleName: string,
    @Query('status') status: number,
    @Query('agreementCode') agreementCode: number,
  ) {
    const [list, total] = await this.moduleInfoService.findAll(current, pageSize, moduleName, status, agreementCode);

    const data = await this.pointPositionService.pointPositionCount(list);

    return success('查询成功', pagination(data, total, current, pageSize));
  }


  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const moduleInfo = await this.moduleInfoService.findOne(id);
    if (!moduleInfo) {
      return error('模块不存在');
    }
    return success('', moduleInfo);
  }

  @Post('/update')
  async update(@Body() data: any) {

    const moduleInfo = await this.moduleInfoService.findOne(data.updateModuleInfoDto.id);
    if (moduleInfo === null) {
      return error('该id数据库中不存在');
    }

    const res = await this.moduleInfoService.update(data.updateModuleInfoDto.id, data.updateModuleInfoDto, data.updateAgreementInfoDto);
    if (res.length > 0) {
      return success('修改成功');
    }
    return error('修改失败');
  }

  @Post('delete')
  async remove(
    @Body('id') id: number,
  ) {
    const res = await this.moduleInfoService.remove(id);
    if (res) {
      return error(res);
    }
    return success('删除成功');
  }

  @Post('batchDelete')
  async batchRemove(
    @Body('ids') ids: [],
  ) {
    const res = await this.moduleInfoService.batchRemove(ids);
    if (res) {
      return error(res);
    }
    return success('批量删除成功');
  }
}
