import { Test, TestingModule } from '@nestjs/testing';
import { ModuleInfoService } from './module-info.service';

describe('ModuleInfoService', () => {
  let service: ModuleInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleInfoService],
    }).compile();

    service = module.get<ModuleInfoService>(ModuleInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
