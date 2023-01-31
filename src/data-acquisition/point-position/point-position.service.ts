import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { PointPosition } from './entities/point-position.entity';
import { CreatePointPositionDto } from './dto/create-point-position.dto';
import { UpdatePointPositionDto } from './dto/update-point-position.dto';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';

@Injectable()
export class PointPositionService {
  constructor(
    @InjectRepository(PointPosition)
    private pointPositionRepository: Repository<PointPosition>,
    @InjectRepository(AgreementInfo)
    private agreementInfoRepository: Repository<AgreementInfo>,
  ) {
  }

  create(createPointPositionDto: CreatePointPositionDto) {
    return this.pointPositionRepository.insert(createPointPositionDto);
  }


  findAll(current: number, pageSize: number, name: string, moduleId: number) {
    return this.pointPositionRepository
      .createQueryBuilder('pointPosition')

      .leftJoinAndMapOne('pointPosition.pointType', TypeInfo, 'tp', 'pointPosition.pointType=tp.typeCode')
      .leftJoinAndMapOne('pointPosition.registerType', TypeInfo, 'tr', 'pointPosition.registerType=tr.typeCode')
      .leftJoinAndMapOne('pointPosition.dataType', TypeInfo, 'td', 'pointPosition.dataType=td.typeCode')


      // 模糊查询
      .where(
        new Brackets((q) => {
          if (name) {
            q.where('name like :name', { name: `%${name}%` });
          }
          if (moduleId) {
            q.where('module_id = :module_id', { module_id: moduleId });
          }
        }),
      )

      .andWhere('tp.typeClass = "point_type"')
      .andWhere('tr.typeClass = "register_type"')
      .andWhere('td.typeClass = "data_type"')

      // 分页条件
      .offset((current - 1) * pageSize)
      .limit(pageSize)

      // 数据排序（ASC 正序，DESC 倒序）
      .orderBy('pointPosition.createTime', 'DESC')
      .getManyAndCount();
  }

  findOne(id: number) {
    return this.pointPositionRepository.findOne({ where: { id } });
  }

  update(id: number, updatePointPositionDto: UpdatePointPositionDto) {
    return this.pointPositionRepository.update(id, updatePointPositionDto);
  }

  remove(ids: []) {
    const list = ids.map(async (item: any) => {
      const pointPosition = await this.pointPositionRepository.findOne({ where: { id: item } });
      if (pointPosition) {
        const row = await this.pointPositionRepository.update({ id: item }, { isDelete: 1, deleteTime: new Date() });
        if (row.affected > 0) {
          return item;
        }
      }
    });

    if (list.length === ids.length) {
      return '删除成功';
    } else {
      return '删除失败';
    }
  }

  async pointPositionCount(list: any) {
    let datas = [];
    for (let i = 0; i < list.length; i++) {
      const pointPositionCount = await this.pointPositionRepository.query(`SELECT COUNT( module_id ) AS 'pointPositionCount' FROM point_position WHERE module_id = ${list[i].id}`);
      datas.push({ ...list[i], ...pointPositionCount[0] });
    }
    return datas;
  }


}
