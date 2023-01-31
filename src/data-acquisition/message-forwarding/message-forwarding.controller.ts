import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MessageForwardingService } from "./message-forwarding.service";
import { CreateMessageForwardingDto } from "./dto/create-message-forwarding.dto";
import {
  UpdateMessageForwardingMqttDto,
  UpdateMessageForwardingWsDto
} from "./dto/update-message-forwarding.dto";
import { _RES } from "@util/response";

@Controller("message-forwarding")
export class MessageForwardingController {
  constructor(private readonly messageForwardingService: MessageForwardingService) {
  }

  @Post()
  create(@Body() createMessageForwardingDto: CreateMessageForwardingDto) {
    return this.messageForwardingService.create(createMessageForwardingDto);
  }

  @Get()
  async findAll() {
    const list = await this.messageForwardingService.findAll();

    return _RES(1, "查询成功", list);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.messageForwardingService.findOne(+id);
  }

  @Post("updateWs")
  async updateWs(@Body() updateMessageForwardingWsDto: UpdateMessageForwardingWsDto) {
    const messageForwarding = await this.messageForwardingService.findOne(updateMessageForwardingWsDto.id);
    if (messageForwarding === null) {
      return _RES(0, "该id数据库中不存在");
    }

    const res = await this.messageForwardingService.updateWs(updateMessageForwardingWsDto.id, updateMessageForwardingWsDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }

  @Post("updateMqtt")
  async updateMqtt(@Body() updateMessageForwardingMqttDto: UpdateMessageForwardingMqttDto) {
    const messageForwarding = await this.messageForwardingService.findOne(updateMessageForwardingMqttDto.id);
    if (messageForwarding === null) {
      return _RES(0, "该id数据库中不存在");
    }

    const res = await this.messageForwardingService.updateMqtt(updateMessageForwardingMqttDto.id, updateMessageForwardingMqttDto);
    if (res.affected > 0) { // 影响的行数
      return _RES(1, "修改成功");
    }
    return _RES(0, "修改失败");
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.messageForwardingService.remove(+id);
  }
}
