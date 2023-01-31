import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { InterfaceTypeInfoService } from './interface-type-info.service';
import { CreateInterfaceTypeInfoDto } from './dto/create-interface-type-info.dto';
import { UpdateInterfaceTypeInfoDto } from './dto/update-interface-type-info.dto';
import { error, success } from '@util/response';

@Controller('interface-type-info')
export class InterfaceTypeInfoController {
  constructor(private readonly interfaceTypeInfoService: InterfaceTypeInfoService) {
  }

  @Post()
  create(@Body() createInterfaceTypeInfoDto: CreateInterfaceTypeInfoDto) {
    return this.interfaceTypeInfoService.create(createInterfaceTypeInfoDto);
  }

  @Get()
  findAll() {
    return this.interfaceTypeInfoService.findAll();
  }

  @Get('findAllByType')
  async findAllByType(
    @Query('parentId', new DefaultValuePipe(0), ParseIntPipe) parentId: number,
    @Query('typeLevel', new DefaultValuePipe(1), ParseIntPipe) typeLevel: number,
  ) {
    const interfaceTypes = await this.interfaceTypeInfoService.findAllByType(parentId, typeLevel);

    return success('', interfaceTypes);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interfaceTypeInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterfaceTypeInfoDto: UpdateInterfaceTypeInfoDto) {
    return this.interfaceTypeInfoService.update(+id, updateInterfaceTypeInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interfaceTypeInfoService.remove(+id);
  }
}
