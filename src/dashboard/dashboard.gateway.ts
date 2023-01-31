import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from "@nestjs/websockets";
import { DashboardService } from "./dashboard.service";
import { CreateDashboardDto } from "./dto/create-dashboard.dto";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { Server } from "ws";
import { stringToHex } from "@util/util";
import TCP_subscription from "@util/TCP";
import MQTT_subscription from "@util/MQTT";
import { log } from "util";


const net = require("net");
var client = null;

@WebSocketGateway({ cors: true })
export class DashboardGateway {
  constructor(private readonly dashboardService: DashboardService) {
  }


  // socket 服务器
  @WebSocketServer()
  server: Server;


  @SubscribeMessage("open_tcp")
  async open_tcp(@MessageBody() data: any): Promise<any> {
    return new Promise(function(resolve) {
      TCP_subscription.newTCP(data, () => {
        resolve("连通");
      });
    });
  }

  @SubscribeMessage("send_tcp")
  async send_tcp(@MessageBody() data: any): Promise<any> {
    console.log(data);
    const res = await TCP_subscription.TCPemit(data);
    return res;
  }

  @SubscribeMessage("close_tcp")
  async close_tcp(@MessageBody() data: any): Promise<any> {
    return new Promise(function(resolve) {
      // TCP_subscription.TCPclose(data, () => {
      //   console.log("关闭没",data);
      //   resolve("关闭");
      // });
    });
  }






  @SubscribeMessage("open_mqtt")
  async open_mqtt(@MessageBody() data: any): Promise<any> {
    console.log(data);
    return new Promise(function(resolve) {
      MQTT_subscription.newMQTT(data, () => {
        resolve("连通");
      });
    });
  }

  @SubscribeMessage("send_mqtt")
  async send_mqtt(@MessageBody() data: any): Promise<any> {
    console.log(data);
    const res = await MQTT_subscription.MQTTemit(data);
    return res;
  }

  @SubscribeMessage("close_tcp")
  async close_mqtt(@MessageBody() data: any): Promise<any> {
    return new Promise(function(resolve) {
      MQTT_subscription.MQTTclose(data, () => {
        console.log("关闭没",data);
        resolve("关闭");
      });
    });
  }









  @SubscribeMessage("createDashboard")
  create(@MessageBody() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }


  @SubscribeMessage("findAllDashboard")
  findAll() {
    // return this.dashboardService.findAll();
    return [{ id: 1, name: "张三三" }];
  }

  @SubscribeMessage("findOneDashboard")
  findOne(@MessageBody() id: number) {
    return this.dashboardService.findOne(id);
  }

  @SubscribeMessage("updateDashboard")
  update(@MessageBody() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(updateDashboardDto.id, updateDashboardDto);
  }

  @SubscribeMessage("removeDashboard")
  remove(@MessageBody() id: number) {
    return this.dashboardService.remove(id);
  }
}
