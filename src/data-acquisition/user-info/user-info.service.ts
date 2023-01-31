import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from '@data-acquisition/user-info/entities/user-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserInfoService {


  constructor(
    @InjectRepository(UserInfo)
    private userInfoRepository: Repository<UserInfo>,
  ) {
  }


  create(createUserInfoDto: CreateUserInfoDto) {
    return this.userInfoRepository.insert(createUserInfoDto);
  }

  findByRoleId(roleId: number) {
    return this.userInfoRepository.find({ where: { roleId: roleId } });
  }

  findAll() {
    return `This action returns all userInfo`;
  }

  findOne(id: number) {
    return this.userInfoRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return this.userInfoRepository.update(id, updateUserInfoDto);
  }

  remove(id: number) {
    return this.userInfoRepository.update(id, { isDelete: 1, deleteTime: new Date() });
  }
}
