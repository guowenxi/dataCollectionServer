import { PartialType } from '@nestjs/swagger';
import { CreateInterfaceTypeInfoDto } from './create-interface-type-info.dto';

export class UpdateInterfaceTypeInfoDto extends PartialType(CreateInterfaceTypeInfoDto) {}
