import { PartialType } from '@nestjs/swagger';
import { CreateLinksInfoDto, CreateLinksInfoMqttDto } from "./create-links-info.dto";

export class UpdateLinksInfoDto extends PartialType(CreateLinksInfoDto) {}


export class UpdateLinksInfoMQTTDto extends PartialType(CreateLinksInfoMqttDto) {}
