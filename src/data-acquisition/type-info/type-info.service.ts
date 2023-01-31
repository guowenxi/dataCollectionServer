import { Injectable } from '@nestjs/common';
import { CreateTypeInfoDto } from './dto/create-type-info.dto';
import { UpdateTypeInfoDto } from './dto/update-type-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';

@Injectable()
export class TypeInfoService {

  constructor(
    @InjectRepository(TypeInfo)
    private typeInfoRepository: Repository<TypeInfo>,
  ) {
  }


  create(createTypeClassDto: CreateTypeInfoDto) {
    return 'This action adds a new typeInfo';
  }

  findAll() {
    return `This action returns all typeInfo`;
  }

  findByTypeInfo(typeClass: string) {

    return this.typeInfoRepository.find({
      where: {
        typeClass,
      },
    });

  }

  findOne(id: number) {
    return `This action returns a #${id} typeInfo`;
  }

  update(id: number, updateTypeClassDto: UpdateTypeInfoDto) {
    return `This action updates a #${id} typeInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeInfo`;
  }

}
