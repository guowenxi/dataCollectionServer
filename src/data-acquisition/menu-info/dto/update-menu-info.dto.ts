import { PartialType } from '@nestjs/swagger';
import { CreateMenuInfoDto } from './create-menu-info.dto';

export class UpdateMenuInfoDto extends PartialType(CreateMenuInfoDto) {}
