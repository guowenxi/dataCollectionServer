import { Injectable } from '@nestjs/common';
import { analysisXlsx, createXlsx } from './util';
import { InjectRepository } from '@nestjs/typeorm';
import { PointPosition } from '@data-acquisition/point-position/entities/point-position.entity';
import { Repository } from 'typeorm';


@Injectable()
export class service {
  constructor(
    @InjectRepository(PointPosition)
    private pointPositionRepository: Repository<PointPosition>,
  ) {

  }

  async importXlsx(moduleId: number, file): Promise<any> {
    try {
      const pointPositions = await analysisXlsx(moduleId, file);

      console.log(pointPositions);

      // 批量添加
      await this.pointPositionRepository.save(pointPositions);

      // 单个添加
      // for (let i = 0; i < pointPositions.length; i++) {
      //   await this.pointPositionRepository.insert(pointPositions[i]);
      // }


      return pointPositions;
    } catch (err) {
      return {
        message: err.message,
        code: false,
      };
    }
  }

  async exportXlsx(ids: any): Promise<any> {
    try {
      const list = [];

      for (let i = 0; i < ids.length; i++) {
        const pointPosition = await this.pointPositionRepository.findOne({ where: { id: ids[i] } });
        if (pointPosition) {
          list.push({ ...pointPosition });
        }
      }

      const data = createXlsx(list);
      return data;
    } catch (err) {
      return {
        message: err.message,
        code: false,
      };
    }
  }


}
