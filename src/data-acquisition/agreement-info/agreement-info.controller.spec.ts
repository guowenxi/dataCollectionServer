import { Test, TestingModule } from '@nestjs/testing';
import { AgreementInfoController } from './agreement-info.controller';
import { AgreementInfoService } from './agreement-info.service';

describe('AgreementInfoController', () => {
  let controller: AgreementInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgreementInfoController],
      providers: [AgreementInfoService],
    }).compile();

    controller = module.get<AgreementInfoController>(AgreementInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
