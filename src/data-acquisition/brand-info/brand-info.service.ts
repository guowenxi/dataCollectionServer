import { Injectable } from '@nestjs/common';
import { CreateBrandInfoDto } from './dto/create-brand-info.dto';
import { UpdateBrandInfoDto } from './dto/update-brand-info.dto';

@Injectable()
export class BrandInfoService {
  create(createBrandInfoDto: CreateBrandInfoDto) {
    return 'This action adds a new brandInfo';
  }

  findAll() {
    return `This action returns all brandInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brandInfo`;
  }

  update(id: number, updateBrandInfoDto: UpdateBrandInfoDto) {
    return `This action updates a #${id} brandInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} brandInfo`;
  }
}
