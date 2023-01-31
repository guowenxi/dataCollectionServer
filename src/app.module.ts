import { Injectable, Module, OnModuleInit } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { GraphQLController } from './GraphQL/module';
import { FileController } from './File/module';
import { mysql } from './mysql';
import { ConfigModule } from '@nestjs/config'; //用于获取node全局环境变量的配置
import config from '@/config/config';
import { AuthGuard } from '@/auth.guard';
import { ScheduleModule } from '@nestjs/schedule';

import { PointPositionModule } from '@/data-acquisition/point-position/point-position.module';
import { TypeInfoModule } from '@/data-acquisition/type-info/type-info.module';
import { AgreementInfoModule } from '@/data-acquisition/agreement-info/agreement-info.module';
import { ModuleInfoModule } from '@/data-acquisition/module-info/module-info.module';
import { InterfaceInfoModule } from '@/data-acquisition/interface-info/interface-info.module';
import { BrandInfoModule } from '@/data-acquisition/brand-info/brand-info.module';
import { RoleInfoModule } from './data-acquisition/role-info/role-info.module';
import { UserInfoModule } from './data-acquisition/user-info/user-info.module';
import { InterfaceTypeInfoModule } from './data-acquisition/interface-type-info/interface-type-info.module';
import { MenuInfoModule } from './data-acquisition/menu-info/menu-info.module';
import { LinksInfoModule } from './data-acquisition/links-info/links-info.module';
import { SubscribeInfoModule } from './data-acquisition/subscribe-info/subscribe-info.module';
import { EditXlsxModule } from '@EditXlsx/module';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { MessageEventsModule } from './data-acquisition/message-events/message-events.module';
import { MessageForwardingModule } from './data-acquisition/message-forwarding/message-forwarding.module';
import { WsGateway } from "@ws/ws.gateway";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [config],
    }),//全局配置
    // GraphQLModule.forRoot({
    //   debug: true,
    //   playground: false,
    // }),
    mysql, //注入mysql
    ScheduleModule.forRoot(), //开启计划任务模块

    //可注入其他contrl
    GraphQLController,
    FileController,
    PointPositionModule,
    TypeInfoModule,
    AgreementInfoModule,
    ModuleInfoModule,
    InterfaceInfoModule,
    BrandInfoModule,
    RoleInfoModule,
    UserInfoModule,
    InterfaceTypeInfoModule,
    MenuInfoModule,
    LinksInfoModule,
    SubscribeInfoModule,
    SubscribeInfoModule,
    EditXlsxModule,
    WsGateway,
    // DashboardModule,
    // MessageEventsModule,
    MessageForwardingModule
  ],
  //主contrl
  controllers: [
    AppController,
  ],
  providers: [
    //全局路由守卫
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    //全局拦截器
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
    // //响应拦截器
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ],
})


export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log(`app启动`);
  }
}
