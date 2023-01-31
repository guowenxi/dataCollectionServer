import { Module } from '@nestjs/common';
import { InterfaceTypeInfoService } from './interface-type-info.service';
import { InterfaceTypeInfoController } from './interface-type-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterfaceTypeInfo } from '@data-acquisition/interface-type-info/entities/interface-type-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterfaceTypeInfo])],
  controllers: [InterfaceTypeInfoController],
  providers: [InterfaceTypeInfoService],
})
export class InterfaceTypeInfoModule {
}
