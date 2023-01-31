import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandInfoService } from './brand-info.service';
import { CreateBrandInfoDto } from './dto/create-brand-info.dto';
import { UpdateBrandInfoDto } from './dto/update-brand-info.dto';

@Controller('brand-info')
export class BrandInfoController {
  constructor(private readonly brandInfoService: BrandInfoService) {}

  @Post()
  create(@Body() createBrandInfoDto: CreateBrandInfoDto) {
    return this.brandInfoService.create(createBrandInfoDto);
  }

  @Get()
  findAll() {
    return this.brandInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandInfoDto: UpdateBrandInfoDto) {
    return this.brandInfoService.update(+id, updateBrandInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandInfoService.remove(+id);
  }
}
