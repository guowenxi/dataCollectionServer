import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceTypeInfoService } from './interface-type-info.service';

describe('InterfaceTypeInfoService', () => {
  let service: InterfaceTypeInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterfaceTypeInfoService],
    }).compile();

    service = module.get<InterfaceTypeInfoService>(InterfaceTypeInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
