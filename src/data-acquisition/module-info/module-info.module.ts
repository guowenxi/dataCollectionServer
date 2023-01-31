import { Module } from '@nestjs/common';
import { ModuleInfoService } from './module-info.service';
import { ModuleInfoController } from './module-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleInfo } from '@data-acquisition/module-info/entities/module-info.entity';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';
import { PointPosition } from '@data-acquisition/point-position/entities/point-position.entity';
import { PointPositionModule } from '@data-acquisition/point-position/point-position.module';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleInfo, AgreementInfo, PointPosition]), PointPositionModule],
  controllers: [ModuleInfoController],
  providers: [ModuleInfoService],
})
export class ModuleInfoModule {

}

