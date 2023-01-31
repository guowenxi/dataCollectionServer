import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgreementInfoService } from './agreement-info.service';
import { CreateAgreementInfoDto } from './dto/create-agreement-info.dto';
import { UpdateAgreementInfoDto } from './dto/update-agreement-info.dto';

@Controller('agreement-info')
export class AgreementInfoController {
  constructor(private readonly agreementInfoService: AgreementInfoService) {}

  @Post()
  create(@Body() createAgreementInfoDto: CreateAgreementInfoDto) {
    return this.agreementInfoService.create(createAgreementInfoDto);
  }

  @Get()
  findAll() {
    return this.agreementInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agreementInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgreementInfoDto: UpdateAgreementInfoDto) {
    return this.agreementInfoService.update(+id, updateAgreementInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agreementInfoService.remove(+id);
  }
}
