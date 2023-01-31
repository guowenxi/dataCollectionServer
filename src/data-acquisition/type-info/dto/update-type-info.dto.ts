import { PartialType } from '@nestjs/swagger';
import { CreateTypeInfoDto } from './create-type-info.dto';

export class UpdateTypeInfoDto extends PartialType(CreateTypeInfoDto) {}
