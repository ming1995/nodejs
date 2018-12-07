/**
 * Created by ming on 2018/12/3.
 */
var fs = require("fs");
var data = '';
// 读取文件
var readerStream = fs.createReadStream('input.txt');
//设置读取编码
readerStream.setEncoding('UTF8');

// 读到数据事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("read stream in stop");
//添加转码依赖
var iconv = require('iconv-lite');
var fileStr = fs.readFileSync('test.txt', {encoding:'binary'});
var buf = new Buffer(fileStr, 'binary');
var str = iconv.decode(buf, 'GBK');
console.log(str);

var data = 'this is a output test ������';

// 写入数据到文本
var writerStream = fs.createWriteStream('output.txt');
// 写入数据格式为utf8
writerStream.write(data,'UTF8');
//写入完成
writerStream.end();
//刷新缓存 --> data, end, and error
writerStream.on('finish', function() {
    console.log("write stream in stop");
});
writerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("application in stop");

//读取文件
var readerStream = fs.createReadStream('input.txt');
// 写入文件
var writerStream = fs.createWriteStream('output2.txt');
// 管道流
// 把对到的文件写入到另一个文件中
readerStream.pipe(writerStream);
console.log("读取完成");

//添加压缩包依赖
var zlib = require('zlib');
 //压缩input.txt input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));


// 解压
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('uninput.txt'));
