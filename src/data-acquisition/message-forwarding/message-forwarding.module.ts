import { Module } from '@nestjs/common';
import { MessageForwardingService } from './message-forwarding.service';
import { MessageForwardingController } from './message-forwarding.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageForwarding } from "@data-acquisition/message-forwarding/entities/message-forwarding.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MessageForwarding])],
  controllers: [MessageForwardingController],
  providers: [MessageForwardingService]
})
export class MessageForwardingModule {}
