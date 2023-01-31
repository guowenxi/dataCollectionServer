import { Test, TestingModule } from '@nestjs/testing';
import { MessageForwardingService } from './message-forwarding.service';

describe('MessageForwardingService', () => {
  let service: MessageForwardingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageForwardingService],
    }).compile();

    service = module.get<MessageForwardingService>(MessageForwardingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
