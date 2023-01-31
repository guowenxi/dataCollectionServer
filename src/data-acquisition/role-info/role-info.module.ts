import { Module } from '@nestjs/common';
import { RoleInfoService } from './role-info.service';
import { RoleInfoController } from './role-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleInfo } from '@data-acquisition/role-info/entities/role-info.entity';
import { UserInfoModule } from '@data-acquisition/user-info/user-info.module';

@Module({
  imports: [UserInfoModule, TypeOrmModule.forFeature([RoleInfo])],
  controllers: [RoleInfoController],
  providers: [RoleInfoService],
})
export class RoleInfoModule {
}
