import { PartialType } from '@nestjs/swagger';
import { CreateMessageForwardingDto } from './create-message-forwarding.dto';

export class UpdateMessageForwardingDto extends PartialType(CreateMessageForwardingDto) {

}
