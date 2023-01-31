import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceInfoController } from './interface-info.controller';
import { InterfaceInfoService } from './interface-info.service';

describe('InterfaceInfoController', () => {
  let controller: InterfaceInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterfaceInfoController],
      providers: [InterfaceInfoService],
    }).compile();

    controller = module.get<InterfaceInfoController>(InterfaceInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
