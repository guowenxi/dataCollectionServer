import { Injectable } from '@nestjs/common';
import { CreateInterfaceInfoDto } from './dto/create-interface-info.dto';
import { UpdateInterfaceInfoDto } from './dto/update-interface-info.dto';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';
import { Brackets, getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InterfaceInfo } from '@data-acquisition/interface-info/entities/interface-info.entity';
import { BrandInfo } from '@data-acquisition/brand-info/entities/brand-info.entity';
import { InterfaceTypeInfo } from '@data-acquisition/interface-type-info/entities/interface-type-info.entity';

@Injectable()
export class InterfaceInfoService {

  constructor(
    @InjectRepository(InterfaceInfo)
    private interfaceInfoRepository: Repository<InterfaceInfo>,
    @InjectRepository(BrandInfo)
    private brandInfoRepository: Repository<BrandInfo>,
  ) {
  }

  create(createInterfaceInfoDto: CreateInterfaceInfoDto) {
    // @ts-ignore
    return this.interfaceInfoRepository.insert(createInterfaceInfoDto);
  }

  findAll(current: number, pageSize: number, interfaceName: string, interfaceType: number, interfaceStatus: number) {
    return this.interfaceInfoRepository
      .createQueryBuilder('interfaceInfo')

      .leftJoinAndMapOne('interfaceInfo.interfaceType', TypeInfo, 'tv', 'interfaceInfo.interfaceType=tv.typeCode')
      // .leftJoinAndMapOne('interfaceInfo.interfaceStatus', TypeInfo, 'ts', 'interfaceInfo.interfaceStatus=ts.typeCode')

      .leftJoinAndMapOne('interfaceInfo.functionOption', InterfaceTypeInfo, 'fo', 'interfaceInfo.functionOption=fo.id')

      .where(
        new Brackets((q) => {

          // 模糊查询
          if (interfaceName) {
            q.where('name like :name', { name: `%${interfaceName}%` });
          }
          if (interfaceType) {
            q.where('interfaceInfo.interfaceType = :interfaceType', { interfaceType: interfaceType });
          }
          if (interfaceStatus > 0) {
            q.where('interfaceInfo.interfaceStatus = :interfaceStatus', { interfaceStatus: interfaceStatus });
          }
        }),
      )
      .andWhere('tv.typeClass = "interface_type"')
      // .andWhere('ts.typeClass = "interface_status"')
      // 分页条件
      .offset((current - 1) * pageSize)
      .limit(pageSize)

      // 数据排序（ASC 正序，DESC 倒序）
      .orderBy('interfaceInfo.createTime', 'DESC')
      .getManyAndCount();
  }


  findOne(id: number) {


    return this.interfaceInfoRepository
      .createQueryBuilder('interfaceInfo')
      .leftJoinAndMapOne('interfaceInfo.request', InterfaceTypeInfo, 'fo', 'interfaceInfo.functionOption=fo.id')
      .where({ id })
      .getOne();
  }

  update(id: number, updateInterfaceInfoDto: UpdateInterfaceInfoDto) {
    return this.interfaceInfoRepository.update(id, updateInterfaceInfoDto);
  }


  remove(id: number) {
    return this.interfaceInfoRepository.update({ id }, { isDelete: 1, deleteTime: new Date() });
  }
}
