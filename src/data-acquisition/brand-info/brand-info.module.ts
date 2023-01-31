import { Module } from '@nestjs/common';
import { BrandInfoService } from './brand-info.service';
import { BrandInfoController } from './brand-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandInfo } from '@data-acquisition/brand-info/entities/brand-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrandInfo])],
  controllers: [BrandInfoController],
  providers: [BrandInfoService]
})
export class BrandInfoModule {}
