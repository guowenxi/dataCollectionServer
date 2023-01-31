import { PartialType } from '@nestjs/swagger';
import { CreateRoleInfoDto } from './create-role-info.dto';

export class UpdateRoleInfoDto extends PartialType(CreateRoleInfoDto) {}
