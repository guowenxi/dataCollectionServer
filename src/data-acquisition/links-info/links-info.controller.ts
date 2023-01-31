import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { LinksInfoService } from "./links-info.service";
import { CreateLinksInfoDto, CreateLinksInfoMqttDto } from "./dto/create-links-info.dto";
import { UpdateLinksInfoDto, UpdateLinksInfoMQTTDto } from "./dto/update-links-info.dto";
import { _PAGINATION, _RES } from "@util/response";

@Controller("links-info")
export class LinksInfoController {
  constructor(
    private readonly linksInfoService: LinksInfoService
  ) {
  }

  @Post("/create")
  async create(@Body() createLinksInfoDto: CreateLinksInfoDto) {
    const res = await this.linksInfoService.create(createLinksInfoDto);
    if (res.generatedMaps.length > 0) {
      return _RES(1, "添加成功");
    }
    return _RES(0, "添加失败");
  }

  @Post("/createMqtt")
  async createMqtt(@Body() createLinksInfoDto: CreateLinksInfoMqttDto) {
    const res = await this.linksInfoService.create(createLinksInfoDto);
    if (res.generatedMaps.length > 0) {
      return _RES(1, "添加成功");
    }
    return _RES(0, "添加失败");
  }

  @Get()
  async findAll() {
    const list = await this.linksInfoService.findAll();

    return _RES(1, "查询成功", list);
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const linksInfo = await this.linksInfoService.findOne(id);
    if (!linksInfo) {
      return _RES(0, "连接不存在");
    }
    return _RES(1, "查询成功", linksInfo);
  }

  @Post("update")
  async update(@Body() updateLinksInfoDto: UpdateLinksInfoDto) {
    const linksInfo = await this.linksInfoService.findOne(updateLinksInfoDto.id);
    if (linksInfo === null) {
      return _RES(0, "该id数据库中不存在");
    }

    const res = await this.linksInfoService.update(updateLinksInfoDto.id, updateLinksInfoDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }



  @Post("updateMqtt")
  async updateMqtt(@Body() updateLinksInfoDto: UpdateLinksInfoMQTTDto) {
    const linksInfo = await this.linksInfoService.findOne(updateLinksInfoDto.id);
    if (linksInfo === null) {
      return _RES(0, "该id数据库中不存在");
    }

    const res = await this.linksInfoService.update(updateLinksInfoDto.id, updateLinksInfoDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    const res = await this.linksInfoService.remove(id);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }
}
