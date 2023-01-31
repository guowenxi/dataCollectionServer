import { Module } from '@nestjs/common';
import { LinksInfoService } from './links-info.service';
import { LinksInfoController } from './links-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksInfo } from '@data-acquisition/links-info/entities/links-info.entity';
import { SubscribeInfo } from '@data-acquisition/subscribe-info/entities/subscribe-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinksInfo, SubscribeInfo])],
  controllers: [LinksInfoController],
  providers: [LinksInfoService],
})
export class LinksInfoModule {
}
