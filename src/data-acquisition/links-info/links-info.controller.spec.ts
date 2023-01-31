import { Test, TestingModule } from '@nestjs/testing';
import { LinksInfoController } from './links-info.controller';
import { LinksInfoService } from './links-info.service';

describe('LinksInfoController', () => {
  let controller: LinksInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinksInfoController],
      providers: [LinksInfoService],
    }).compile();

    controller = module.get<LinksInfoController>(LinksInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
