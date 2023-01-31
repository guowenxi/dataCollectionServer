import { Test, TestingModule } from '@nestjs/testing';
import { RoleInfoService } from './role-info.service';

describe('RoleInfoService', () => {
  let service: RoleInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleInfoService],
    }).compile();

    service = module.get<RoleInfoService>(RoleInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
