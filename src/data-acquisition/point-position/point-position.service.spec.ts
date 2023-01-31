import { Test, TestingModule } from '@nestjs/testing';
import { PointPositionService } from './point-position.service';

describe('PointPositionService', () => {
  let service: PointPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointPositionService],
    }).compile();

    service = module.get<PointPositionService>(PointPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
