import { Test, TestingModule } from '@nestjs/testing';
import { SubscribeInfoController } from './subscribe-info.controller';
import { SubscribeInfoService } from './subscribe-info.service';

describe('SubscribeInfoController', () => {
  let controller: SubscribeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscribeInfoController],
      providers: [SubscribeInfoService],
    }).compile();

    controller = module.get<SubscribeInfoController>(SubscribeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
