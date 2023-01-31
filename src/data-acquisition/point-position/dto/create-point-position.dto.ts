import { IsString, IsInt, Length } from 'class-validator';

export class CreatePointPositionDto {
  id: number;

  moduleId: number; // 模块id

  @Length(1, 100, {
    message: '请输入点位名称',
  })
  name: string;

}
