import { Test, TestingModule } from '@nestjs/testing';
import { MenuInfoService } from './menu-info.service';

describe('MenuInfoService', () => {
  let service: MenuInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuInfoService],
    }).compile();

    service = module.get<MenuInfoService>(MenuInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
