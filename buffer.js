/**
 * Created by ming on 2018/12/3.
 */
const buf = Buffer.from('GGG', 'utf8');
// 输出 72756e6f6f62
console.log(buf.toString('utf8'));

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');


//写入到缓冲区
const write = Buffer.alloc(256);
len = write.write("www.runoob.com");

console.log("write byte  count= : "+  len);

//重缓冲区读
const read = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    read[i] = i + 97;
}
console.log( read.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( read.toString('ascii',0,5));   // 输出: abcde
console.log( read.toString('utf8',0,5));    // 输出: abcde
console.log( read.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//合并缓冲区
var buffer1 = Buffer.from(('buffer1 content'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content=: " + buffer3.toString());
//比较缓冲区
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " and " + buffer2 + ">");
}else if(result == 0){
    console.log(buffer1 + "and " + buffer2 + "==");
}else {
    console.log(buffer1 + " and " + buffer2 + "<");
};

//复制缓冲区
var buf0 = Buffer.from('abcdefghijkl');
var buf9 = Buffer.from('RUNOOB');
//将 buf9 插入到 buf0 指定位置上
buf9.copy(buf0, 2);
console.log(buf0.toString());

//缓冲区裁剪
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
//缓冲区长度
console.log('buf0 length='+buf0.length);