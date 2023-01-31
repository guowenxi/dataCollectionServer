import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MenuInfoService } from './menu-info.service';
import { CreateMenuInfoDto } from './dto/create-menu-info.dto';
import { UpdateMenuInfoDto } from './dto/update-menu-info.dto';
import { _RES, error, success } from '@util/response';

@Controller('menu-info')
export class MenuInfoController {
  constructor(private readonly menuInfoService: MenuInfoService) {
  }

  @Post()
  create(@Body() createMenuInfoDto: CreateMenuInfoDto) {
    return this.menuInfoService.create(createMenuInfoDto);
  }

  @Get()
  async findAll() {
    const menuInfos = await this.menuInfoService.findAll();
    return _RES(1, '查询成功', menuInfos);
  }


  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const interfaceInfo = await this.menuInfoService.findOne(id);
    if (!interfaceInfo) {
      return _RES(0, '菜单不存在');
    }
    return _RES(1, '查询成功', interfaceInfo);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuInfoDto: UpdateMenuInfoDto) {
    return this.menuInfoService.update(+id, updateMenuInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuInfoService.remove(+id);
  }
}
