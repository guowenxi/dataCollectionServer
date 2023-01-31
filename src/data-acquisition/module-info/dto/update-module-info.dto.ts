import { PartialType } from '@nestjs/swagger';
import { CreateModuleInfoDto } from './create-module-info.dto';

export class UpdateModuleInfoDto extends PartialType(CreateModuleInfoDto) {}
