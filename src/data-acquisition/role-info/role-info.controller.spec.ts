import { Test, TestingModule } from '@nestjs/testing';
import { RoleInfoController } from './role-info.controller';
import { RoleInfoService } from './role-info.service';

describe('RoleInfoController', () => {
  let controller: RoleInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleInfoController],
      providers: [RoleInfoService],
    }).compile();

    controller = module.get<RoleInfoController>(RoleInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
