var http = require('http');
var url = require('url');
var querystring = require('querystring');
//get请求获取参数
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     // 解析 url 参数,获取get请求参数
//     var params = url.parse(req.url, true).query;
//     res.write("姓名：" + params.name);
//     res.write("\n");
//     res.write("年龄：" + params.age);
//     res.end();
// }).listen(3000);

//post请求获取参数
var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '姓名： <input name="name"><br>' +
    '年龄： <input name="age"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        console.log(body);
        if(body.name && body.age) { // 输出提交的数据
            res.write("姓名：" + body.name);
            res.write("<br>");
            res.write("年龄：" + body.age);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);