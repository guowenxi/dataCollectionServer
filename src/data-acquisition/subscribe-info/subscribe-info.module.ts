import { Module } from '@nestjs/common';
import { SubscribeInfoService } from './subscribe-info.service';
import { SubscribeInfoController } from './subscribe-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribeInfo } from '@data-acquisition/subscribe-info/entities/subscribe-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscribeInfo])],
  controllers: [SubscribeInfoController],
  providers: [SubscribeInfoService]
})
export class SubscribeInfoModule {}
