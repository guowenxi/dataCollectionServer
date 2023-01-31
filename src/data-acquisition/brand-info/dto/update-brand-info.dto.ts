import { PartialType } from '@nestjs/swagger';
import { CreateBrandInfoDto } from './create-brand-info.dto';

export class UpdateBrandInfoDto extends PartialType(CreateBrandInfoDto) {}
