import { Test, TestingModule } from '@nestjs/testing';
import { MessageForwardingController } from './message-forwarding.controller';
import { MessageForwardingService } from './message-forwarding.service';

describe('MessageForwardingController', () => {
  let controller: MessageForwardingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageForwardingController],
      providers: [MessageForwardingService],
    }).compile();

    controller = module.get<MessageForwardingController>(MessageForwardingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
