/**
 * Created by ming on 2018/12/5.
 */
//只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。
console.log('current script path=',__filename);
console.log('current script dirpath=',__dirname);
process.on('exit', function(code) {
    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("it code dont start");
    }, 0);
    console.log('exit application:', code);
});
console.log("application in stop");

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
// 获取执行路径
console.log(process.execPath);
// 平台信息
console.log(process.platform);
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());