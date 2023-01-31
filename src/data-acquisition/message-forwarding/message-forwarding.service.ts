import { Injectable } from "@nestjs/common";
import { CreateMessageForwardingDto } from "./dto/create-message-forwarding.dto";
import {
  UpdateMessageForwardingMqttDto,
  UpdateMessageForwardingWsDto
} from "./dto/update-message-forwarding.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessageForwarding } from "@data-acquisition/message-forwarding/entities/message-forwarding.entity";

@Injectable()
export class MessageForwardingService {

  constructor(
    @InjectRepository(MessageForwarding)
    private messageForwardingRepository: Repository<MessageForwarding>
  ) {

  }


  create(createMessageForwardingDto: CreateMessageForwardingDto) {
    return "This action adds a new messageForwarding";
  }

  findAll() {
    return this.messageForwardingRepository.find();
  }

  findOne(id: number) {
    return this.messageForwardingRepository.findOne({ where: { id } });
  }

  updateWs(id: number, updateMessageForwardingWsDto: UpdateMessageForwardingWsDto) {
    return this.messageForwardingRepository.update(id, updateMessageForwardingWsDto);
  }

  updateMqtt(id: number, updateMessageForwardingMqttDto: UpdateMessageForwardingMqttDto) {
    return this.messageForwardingRepository.update(id, updateMessageForwardingMqttDto);
  }

  remove(id: number) {
    return `This action removes a #${id} messageForwarding`;
  }
}
