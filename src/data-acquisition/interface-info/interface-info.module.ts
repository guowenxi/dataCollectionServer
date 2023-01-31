import { Module } from '@nestjs/common';
import { InterfaceInfoService } from './interface-info.service';
import { InterfaceInfoController } from './interface-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterfaceInfo } from '@data-acquisition/interface-info/entities/interface-info.entity';
import { BrandInfo } from '@data-acquisition/brand-info/entities/brand-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterfaceInfo,BrandInfo])],
  controllers: [InterfaceInfoController],
  providers: [InterfaceInfoService]
})
export class InterfaceInfoModule {}
