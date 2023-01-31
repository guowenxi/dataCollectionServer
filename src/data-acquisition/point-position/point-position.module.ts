import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointPositionService } from './point-position.service';
import { PointPositionController } from './point-position.controller';
import { PointPosition } from './entities/point-position.entity';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PointPosition, AgreementInfo])],
  controllers: [PointPositionController],
  providers: [PointPositionService],
  exports: [PointPositionService]
})
export class PointPositionModule {

}
