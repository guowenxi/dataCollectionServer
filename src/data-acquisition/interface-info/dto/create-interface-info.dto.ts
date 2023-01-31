import { IsNotEmpty, Length, Max, MaxLength, Min } from "class-validator";

export class CreateInterfaceInfoDto {

  @IsNotEmpty({ message: "请输入接口名称" })
  @Length(1, 20, { message: "接口名称在20个字符之内" })
  name: string; // 接口名称

  @IsNotEmpty({ message: "请选择接口类型" })
  interfaceType: number; // 接口类型

  @Length(1, 20, { message: "IP地址在20个字符之内" })
  serviceIp: string; // 服务ip

  @Min(1,{ message: "端口号在5个字符之内" })
  @Max(65535,{ message: "端口号在5个字符之内" })
  servicePort: number; // 服务端口

  @IsNotEmpty({ message: "请选择品牌" })
  brandCode: number; //	品牌编号

  @IsNotEmpty({ message: "请选择版本号" })
  versionNumber: number; // 版本

  @IsNotEmpty({ message: "请选择功能类别" })
  functionType: number; // 功能类别

  @IsNotEmpty({ message: "请选择功能选项" })
  functionOption: number; // 功能选项

}
export class CreateInterfaceInfoThirdPartyDto {
  @IsNotEmpty({ message: "请输入接口名称" })
  @Length(1, 20, { message: "接口名称在20个字符之内" })
  name: string; // 接口名称

  @IsNotEmpty({ message: "请选择请求方式" })
  requestMethod: string; //

  @IsNotEmpty({ message: "请输入请求Url地址" })
  requestUrl: string; //

  @Min(1,{ message: "请输入轮询(ms)" })
  @Max(65535,{ message: "请输入轮询(ms)" })
  polling: number; //

}
