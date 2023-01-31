import { Module } from '@nestjs/common';
import { AgreementInfoService } from './agreement-info.service';
import { AgreementInfoController } from './agreement-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgreementInfo])],
  controllers: [AgreementInfoController],
  providers: [AgreementInfoService]
})
export class AgreementInfoModule {}
