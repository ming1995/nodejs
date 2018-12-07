/**
 * Created by ming on 2018/12/3.
 */
//var fs = require("fs");
//同步,线程阻塞
//var data = fs.readFileSync('test.txt');
//console.log(data.toString());
//console.log("application in stop");
//异步,线程非阻塞
//fs.readFile('test.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
//});
//console.log("application in stop!");

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");