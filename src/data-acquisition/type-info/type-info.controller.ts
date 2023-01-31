import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TypeInfoService } from './type-info.service';
import { CreateTypeInfoDto } from './dto/create-type-info.dto';
import { UpdateTypeInfoDto } from './dto/update-type-info.dto';
import { pagination, success } from '@util/response';

@Controller('type-info')
export class TypeInfoController {
  constructor(private readonly typeInfoService: TypeInfoService) {
  }

  @Post()
  create(@Body() createTypeClassDto: CreateTypeInfoDto) {
    return this.typeInfoService.create(createTypeClassDto);
  }

  @Get()
  findAll() {
    return this.typeInfoService.findAll();
  }

  @Get("findByTypeInfo")
  async findByTypeInfo(
    @Query('typeClass') typeClass: string,
  ) {
    const data = await this.typeInfoService.findByTypeInfo(typeClass);
    return success('查询成功', data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeClassDto: UpdateTypeInfoDto) {
    return this.typeInfoService.update(+id, updateTypeClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeInfoService.remove(+id);
  }
}
