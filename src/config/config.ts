export default () => ({
  // axiosUrl:"http://192.168.1.234:12003",
  axiosUrl: 'http://192.168.2.176:99',
  // axiosUrl:"http://192.168.1.244:8080/zhyw-Energy-Java",
  // axiosUrl:"http://192.168.1.244:20081",
  port: parseInt(process.env.PORT, 10) || 30001,
  //上传文件的路径
  filePath: 'fileStore',
  database: {
    // host: process.env.DATABASE_HOST,
    // port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    // username: 'root',
    // password: '123456',


    port: 3306,
    host: '192.168.1.147',
    username: 'test',
    password: 'Jiayi123',




    database: 'jy_base',
    autoLoadEntities: true, //是否将自动加载实体
    keepConnectionAlive: true, //在应用程序关闭后连接不会关闭
    synchronize: true,
    logging: true, // 输出SQL
  },
});
