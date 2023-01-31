import { Test, TestingModule } from '@nestjs/testing';
import { AgreementInfoService } from './agreement-info.service';

describe('AgreementInfoService', () => {
  let service: AgreementInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgreementInfoService],
    }).compile();

    service = module.get<AgreementInfoService>(AgreementInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
