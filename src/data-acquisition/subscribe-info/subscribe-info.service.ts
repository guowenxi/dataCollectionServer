import { Injectable } from "@nestjs/common";
import { CreateSubscribeInfoDto } from "./dto/create-subscribe-info.dto";
import { UpdateSubscribeInfoDto } from "./dto/update-subscribe-info.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { SubscribeInfo } from "@data-acquisition/subscribe-info/entities/subscribe-info.entity";
import { Repository } from "typeorm";
import { TypeInfo } from "@data-acquisition/type-info/entities/type-info.entity";

@Injectable()
export class SubscribeInfoService {

  constructor(
    @InjectRepository(SubscribeInfo)
    private subscribeInfoRepository: Repository<SubscribeInfo>
  ) {

  }

  create(createSubscribeInfoDto: CreateSubscribeInfoDto) {
    return this.subscribeInfoRepository.insert(createSubscribeInfoDto);
  }

  findAll(linksId: number) {
    // return this.subscribeInfoRepository.find({ where: { linksId: linksId } });

    return this.subscribeInfoRepository.createQueryBuilder("subscribeInfo")

      .leftJoinAndMapOne("subscribeInfo.qos", TypeInfo, "tt", "subscribeInfo.qos=tt.typeCode")
      .where("subscribeInfo.linksId = :linksId", { linksId: linksId })
      .andWhere("tt.typeClass = 'qos_type'")

      .getMany();

  }

  findOne(id: number) {
    return this.subscribeInfoRepository.findOne({ where: { id } });
  }

  update(id: number, updateSubscribeInfoDto: UpdateSubscribeInfoDto) {
    return this.subscribeInfoRepository.update(id, updateSubscribeInfoDto);
  }

  remove(id: number) {
    return this.subscribeInfoRepository.update({ id }, { isDelete: 1, deleteTime: new Date() });
  }
}
