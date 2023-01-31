import { PartialType } from '@nestjs/swagger';
import { CreatePointPositionDto } from './create-point-position.dto';

export class UpdatePointPositionDto extends PartialType(CreatePointPositionDto) {}
