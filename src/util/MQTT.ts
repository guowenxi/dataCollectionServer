/**
 * 构建TCP客户端
 */
var ws = require("ws");
/* 引入net模块 */
var mqtt = require("mqtt");
/* 创建TCP客户端 */
export default {
  MQTT_sock: null,
  MQTT_client: null,
  newSocket: function(url) {
    this.MQTT_sock = new ws(url);
    return this.MQTT_sock;
  },
  newMQTT: function({ mqttType, ipAddress, portNumber, linksPath, clientId, username, password, topics }, fn) {
    // const connectUrl = `mqtt://116.62.102.19:1883`;
    // const connectUrl = `ws://116.62.102.19:8183/mqtt`;

    const connectUrl = `${mqttType}${ipAddress}:${portNumber}${linksPath}`;

    // 客户端ID
    const id = `mqtt_${Math.random().toString(16).slice(3)}`;
    // 连接设置
    let options = {
      clean: true,	// 保留会话
      connectTimeout: 4000,	// 超时时间
      reconnectPeriod: 1000,	// 重连时间间隔
      // 认证信息
      clientId: id,

      username: username,
      password: password
    };

    /* 设置连接的服务器 */
    this.MQTT_client = mqtt.connect(connectUrl, options);

    this.MQTT_client.on("connect", () => {
      console.log("已经连接成功");
      // 订阅主题，这里可以订阅多个主题
      this.MQTT_client.subscribe(topics, () => {
        console.log(`订阅了主题 ${topics.join("和")}`);
      });
    });


    this.MQTT_client.on('message', function (topic, message, packet) {

      console.log("获取到的数据：", message.toString())
      console.log("数据对应订阅主题：", topic)
      console.log("获取到的数据包：", packet)
    });

    return this.MQTT_client;
  },
  MQTTemit: async function(data) {
    return new Promise((resolve) => {


      // 发送信息给 topic（主题）
      this.MQTT_client.publish(data.topic, data.content);


      // 当客户端收到一个发布过来的消息时触发回调
      /**
       * topic：收到的报文的topic
       * message：收到的数据包的负载playload
       * packet：MQTT 报文信息，其中包含 QoS、retain 等信息
       */
      this.MQTT_client.on("message", (topic, message, packet) => {
        // console.log("获取到的数据：", message.toString());
        // console.log("数据对应订阅主题：", topic);
        // console.log("获取到的数据包：", packet);
        resolve({ topic: topic, message: message.toString() });
      });

    });
  },


  MQTTclose: function(data, fn) {
    console.log();
    if (this.MQTT_client) {
      this.MQTT_client.end();
    }
    return data;
  },
  TCPon: async function(data) {

  },
  emit: function() {
    this.MQTT_sock.send(JSON.stringify(this.sendData));
  }
};

