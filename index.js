/**
 * Created by ming on 2018/12/4.
 */
const  hello=require('./hello');
//hello.word();
hell = new hello();
hell.setName('LeeJunMing');
hell.sayHello();

function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello LeeMing");
//匿名函数
execute(function(word){ console.log(word) }, "Hello Ming");

//函数传递是代码可读性更好
var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);
