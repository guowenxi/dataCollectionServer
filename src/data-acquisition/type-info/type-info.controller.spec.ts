import { Test, TestingModule } from '@nestjs/testing';
import { TypeInfoController } from './type-info.controller';
import { TypeInfoService } from './type-info.service';

describe('TypeInfoController', () => {
  let controller: TypeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeInfoController],
      providers: [TypeInfoService],
    }).compile();

    controller = module.get<TypeInfoController>(TypeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
