import { PartialType } from '@nestjs/swagger';
import { CreateLinksInfoDto } from './create-links-info.dto';

export class UpdateLinksInfoDto extends PartialType(CreateLinksInfoDto) {}
