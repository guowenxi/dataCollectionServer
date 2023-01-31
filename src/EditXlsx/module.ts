import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { service } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointPosition } from '@data-acquisition/point-position/entities/point-position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PointPosition])],
  controllers: [AppController],
  providers: [
    service,
  ],
})
export class EditXlsxModule {
}
