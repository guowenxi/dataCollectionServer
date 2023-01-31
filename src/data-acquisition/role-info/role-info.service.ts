import { Injectable } from '@nestjs/common';
import { CreateRoleInfoDto } from './dto/create-role-info.dto';
import { UpdateRoleInfoDto } from './dto/update-role-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleInfo } from '@data-acquisition/role-info/entities/role-info.entity';
import { Repository } from 'typeorm';
import { UserInfo } from '@data-acquisition/user-info/entities/user-info.entity';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';

@Injectable()
export class RoleInfoService {


  constructor(
    @InjectRepository(RoleInfo)
    private roleInfoRepository: Repository<RoleInfo>,
  ) {
  }


  create(createRoleInfoDto: CreateRoleInfoDto) {
    return this.roleInfoRepository.insert(createRoleInfoDto);
  }

  list() {
    return this.roleInfoRepository.find();
  }

  findAll(current: number, pageSize: number) {
    return this.roleInfoRepository.createQueryBuilder('roleInfo')

      .leftJoinAndMapMany('roleInfo.userInfo', UserInfo, 'iu', 'roleInfo.id=iu.roleId')

      .leftJoinAndMapOne('roleInfo.operationAuthority', TypeInfo, 'ta', 'roleInfo.operationAuthority=ta.typeCode')

      .andWhere('ta.typeClass = "operation_authority"')

      // 分页条件
      .offset((current - 1) * pageSize)
      .limit(pageSize)

      // 数据排序（ASC 正序，DESC 倒序）
      .orderBy('roleInfo.createTime', 'DESC')

      .getManyAndCount();
  }

  findOne(id: number) {
    return this.roleInfoRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateRoleInfoDto: UpdateRoleInfoDto) {
    return this.roleInfoRepository.update(id, updateRoleInfoDto);
  }

  remove(id: number) {
    return this.roleInfoRepository.update(id, { isDelete: 1, deleteTime: new Date() });
  }

  removeBatch(ids: []) {
    const list = ids.map(async (item: any) => {
      const role = await this.roleInfoRepository.findOne({ where: { id: item } });
      if (role) {

        const row = await this.roleInfoRepository.update({ id: item }, { isDelete: 1, deleteTime: new Date() });
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

}
