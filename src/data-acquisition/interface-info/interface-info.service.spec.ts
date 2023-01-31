import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceInfoService } from './interface-info.service';

describe('InterfaceInfoService', () => {
  let service: InterfaceInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterfaceInfoService],
    }).compile();

    service = module.get<InterfaceInfoService>(InterfaceInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
