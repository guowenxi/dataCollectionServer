import { Injectable } from '@nestjs/common';
import { CreateMenuInfoDto } from './dto/create-menu-info.dto';
import { UpdateMenuInfoDto } from './dto/update-menu-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuInfo } from '@data-acquisition/menu-info/entities/menu-info.entity';

@Injectable()
export class MenuInfoService {

  constructor(
    @InjectRepository(MenuInfo)
    private menuInfoRepository: Repository<MenuInfo>,
  ) {
  }

  create(createMenuInfoDto: CreateMenuInfoDto) {
    return 'This action adds a new menuInfo';
  }

  findAll() {
    return this.menuInfoRepository.find()
  }

  findOne(id: number) {
    return this.menuInfoRepository.findOne({ where: { id } });
  }

  update(id: number, updateMenuInfoDto: UpdateMenuInfoDto) {
    return `This action updates a #${id} menuInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuInfo`;
  }
}
