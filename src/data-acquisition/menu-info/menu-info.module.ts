import { Module } from '@nestjs/common';
import { MenuInfoService } from './menu-info.service';
import { MenuInfoController } from './menu-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuInfo } from '@data-acquisition/menu-info/entities/menu-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuInfo])],
  controllers: [MenuInfoController],
  providers: [MenuInfoService]
})
export class MenuInfoModule {}
