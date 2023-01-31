import { PartialType } from '@nestjs/swagger';
import { CreateSubscribeInfoDto } from './create-subscribe-info.dto';

export class UpdateSubscribeInfoDto extends PartialType(CreateSubscribeInfoDto) {}
