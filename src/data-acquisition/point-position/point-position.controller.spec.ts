import { Test, TestingModule } from '@nestjs/testing';
import { PointPositionController } from './point-position.controller';
import { PointPositionService } from './point-position.service';

describe('PointPositionController', () => {
  let controller: PointPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointPositionController],
      providers: [PointPositionService],
    }).compile();

    controller = module.get<PointPositionController>(PointPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
