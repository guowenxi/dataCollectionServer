import { PartialType } from '@nestjs/swagger';
import { CreateAgreementInfoDto } from './create-agreement-info.dto';
import { Length } from "class-validator";

export class UpdateAgreementInfoDto extends PartialType(CreateAgreementInfoDto) {


}
