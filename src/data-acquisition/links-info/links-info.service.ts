import { Injectable } from "@nestjs/common";
import { CreateLinksInfoDto } from "./dto/create-links-info.dto";
import { UpdateLinksInfoDto } from "./dto/update-links-info.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Brackets, getConnection, Repository } from "typeorm";
import { LinksInfo } from "@data-acquisition/links-info/entities/links-info.entity";
import { SubscribeInfo } from "@data-acquisition/subscribe-info/entities/subscribe-info.entity";
import { TypeInfo } from "@data-acquisition/type-info/entities/type-info.entity";


@Injectable()
export class LinksInfoService {

  constructor(
    @InjectRepository(LinksInfo)
    private linksInfoRepository: Repository<LinksInfo>,
    @InjectRepository(SubscribeInfo)
    private subscribeInfoRepository: Repository<SubscribeInfo>
  ) {

  }


  async create(createLinksInfoDto: CreateLinksInfoDto) {
    return this.linksInfoRepository.insert(createLinksInfoDto);

  }

  findAll() {
    return this.linksInfoRepository.createQueryBuilder("linksInfo")

      .leftJoinAndMapOne("linksInfo.linksType", TypeInfo, "lt", "linksInfo.linksType=lt.typeCode")
      // .leftJoinAndMapOne('linksInfo.protocolType', TypeInfo, 'pt',  'linksInfo.protocolType=pt.typeCode')

      .andWhere("lt.typeClass = \"links_type\"")
      // .andWhere('pt.typeClass = "protocol_type"')



      .getMany();
  }

  findOne(id: number) {

    // return this.linksInfoRepository.createQueryBuilder('linksInfo')
    //
    //   .leftJoinAndMapOne('linksInfo.linksType', TypeInfo, 'lt', 'linksInfo.linksType=lt.typeCode')
    //   .leftJoinAndMapOne('linksInfo.protocolType', TypeInfo, 'pt', 'linksInfo.protocolType=pt.typeCode')
    //   .where('linksInfo.id = :id', { id: id })
    //   .andWhere('lt.typeClass = "links_type"')
    //   .andWhere('pt.typeClass = "protocol_type"')
    //
    //   .getOne();


    return this.linksInfoRepository.findOne({ where: { id } });

  }

  update(id: number, updateLinksInfoDto: UpdateLinksInfoDto) {
    return this.linksInfoRepository.update(id, updateLinksInfoDto);
  }

  remove(id: number) {
    return this.linksInfoRepository.update({ id }, { isDelete: 1, deleteTime: new Date() });
  }

}
