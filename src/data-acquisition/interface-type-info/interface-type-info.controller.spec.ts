import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceTypeInfoController } from './interface-type-info.controller';
import { InterfaceTypeInfoService } from './interface-type-info.service';

describe('InterfaceTypeInfoController', () => {
  let controller: InterfaceTypeInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterfaceTypeInfoController],
      providers: [InterfaceTypeInfoService],
    }).compile();

    controller = module.get<InterfaceTypeInfoController>(InterfaceTypeInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
