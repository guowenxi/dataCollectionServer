import { PartialType } from '@nestjs/swagger';
import { CreateInterfaceInfoDto } from './create-interface-info.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UpdateInterfaceInfoDto extends PartialType(CreateInterfaceInfoDto) {
  id: number;
}
