import { Injectable } from '@nestjs/common';
import { CreateInterfaceTypeInfoDto } from './dto/create-interface-type-info.dto';
import { UpdateInterfaceTypeInfoDto } from './dto/update-interface-type-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterfaceTypeInfo } from '@data-acquisition/interface-type-info/entities/interface-type-info.entity';

@Injectable()
export class InterfaceTypeInfoService {


  constructor(
    @InjectRepository(InterfaceTypeInfo)
    private interfaceTypeInfoRepository: Repository<InterfaceTypeInfo>,
  ) {
  }


  create(createInterfaceTypeInfoDto: CreateInterfaceTypeInfoDto) {
    return 'This action adds a new interfaceTypeInfo';
  }

  findAll() {
    return `This action returns all interfaceTypeInfo`;
  }

  findAllByType(parentId: number, typeLevel: number) {
    return this.interfaceTypeInfoRepository.find({ where: { parentId: parentId, typeLevel: typeLevel } });
  }

  findOne(id: number) {
    return this.interfaceTypeInfoRepository.findOne({ where: { id } });
  }

  update(id: number, updateInterfaceTypeInfoDto: UpdateInterfaceTypeInfoDto) {
    return `This action updates a #${id} interfaceTypeInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} interfaceTypeInfo`;
  }
}
