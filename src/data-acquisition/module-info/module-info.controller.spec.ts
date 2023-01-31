import { Test, TestingModule } from '@nestjs/testing';
import { ModuleInfoController } from './module-info.controller';
import { ModuleInfoService } from './module-info.service';

describe('ModuleInfoController', () => {
  let controller: ModuleInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleInfoController],
      providers: [ModuleInfoService],
    }).compile();

    controller = module.get<ModuleInfoController>(ModuleInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
