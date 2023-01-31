import { PartialType } from '@nestjs/swagger';
import { CreateInterfaceInfoDto, CreateInterfaceInfoThirdPartyDto } from "./create-interface-info.dto";

export class UpdateInterfaceInfoDto extends PartialType(CreateInterfaceInfoDto) {
  id: number;
}
export class UpdateInterfaceInfoThirdPartyDto extends PartialType(CreateInterfaceInfoThirdPartyDto) {
  id: number;
}
