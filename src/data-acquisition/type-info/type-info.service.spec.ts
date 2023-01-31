import { Test, TestingModule } from '@nestjs/testing';
import { TypeClassService } from './type-info.service';

describe('TypeClassService', () => {
  let service: TypeClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeClassService],
    }).compile();

    service = module.get<TypeClassService>(TypeClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
