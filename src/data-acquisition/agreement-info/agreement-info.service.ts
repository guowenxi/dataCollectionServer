import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgreementInfoDto } from './dto/create-agreement-info.dto';
import { UpdateAgreementInfoDto } from './dto/update-agreement-info.dto';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';
import { UpdatePointPositionDto } from '@data-acquisition/point-position/dto/update-point-position.dto';

@Injectable()
export class AgreementInfoService {

  constructor(
    @InjectRepository(AgreementInfo)
    private agreementInfoRepository: Repository<AgreementInfo>,
  ) {
  }


  create(createAgreementInfoDto: CreateAgreementInfoDto) {
    return this.agreementInfoRepository.insert(createAgreementInfoDto);
  }

  findAll() {
    return `This action returns all agreementInfo`;
  }

  findOne(id: number) {
    return this.agreementInfoRepository.findOne({ where: { id } });
  }

  update(id: number, updatePointPositionDto: UpdatePointPositionDto) {
    return this.agreementInfoRepository.update(id, updatePointPositionDto);
  }

  remove(id: number) {
    return this.agreementInfoRepository.delete(id);
  }
}
