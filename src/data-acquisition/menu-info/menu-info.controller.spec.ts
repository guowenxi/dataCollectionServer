import { Test, TestingModule } from '@nestjs/testing';
import { MenuInfoController } from './menu-info.controller';
import { MenuInfoService } from './menu-info.service';

describe('MenuInfoController', () => {
  let controller: MenuInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuInfoController],
      providers: [MenuInfoService],
    }).compile();

    controller = module.get<MenuInfoController>(MenuInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
