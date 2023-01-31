import { Test, TestingModule } from '@nestjs/testing';
import { SubscribeInfoService } from './subscribe-info.service';

describe('SubscribeInfoService', () => {
  let service: SubscribeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscribeInfoService],
    }).compile();

    service = module.get<SubscribeInfoService>(SubscribeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
