import { Test, TestingModule } from '@nestjs/testing';
import { LinksInfoService } from './links-info.service';

describe('LinksInfoService', () => {
  let service: LinksInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinksInfoService],
    }).compile();

    service = module.get<LinksInfoService>(LinksInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
