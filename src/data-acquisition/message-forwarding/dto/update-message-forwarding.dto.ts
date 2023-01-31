import { PartialType } from "@nestjs/swagger";
import {
  CreateMessageForwardingDto,
  CreateMessageForwardingWsDto,
  CreateMessageForwardingMqttDto
} from "./create-message-forwarding.dto";

export class UpdateMessageForwardingDto extends PartialType(CreateMessageForwardingDto) {

}



export class UpdateMessageForwardingWsDto extends PartialType(CreateMessageForwardingWsDto) {

}

export class UpdateMessageForwardingMqttDto extends PartialType(CreateMessageForwardingMqttDto) {

}
