import { Test, TestingModule } from '@nestjs/testing';
import { BrandInfoService } from './brand-info.service';

describe('BrandInfoService', () => {
  let service: BrandInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandInfoService],
    }).compile();

    service = module.get<BrandInfoService>(BrandInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
