import { Module } from '@nestjs/common';
import { TypeInfoService } from './type-info.service';
import { TypeInfoController } from './type-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeInfo])],
  controllers: [TypeInfoController],
  providers: [TypeInfoService],
})
export class TypeInfoModule {
}
