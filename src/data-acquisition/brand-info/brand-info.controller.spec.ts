import { Test, TestingModule } from '@nestjs/testing';
import { BrandInfoController } from './brand-info.controller';
import { BrandInfoService } from './brand-info.service';

describe('BrandInfoController', () => {
  let controller: BrandInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandInfoController],
      providers: [BrandInfoService],
    }).compile();

    controller = module.get<BrandInfoController>(BrandInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
