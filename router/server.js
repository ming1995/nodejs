var http = require('http');
var router=require('./router');
var url = require('url');
var querystring=require('querystring');
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var re=url.parse(request.url,true);//转换url
    console.log(re);
    pathname = pathname.replace(/\//,'');//获取路由名称
    var param=url.parse(request.url).query;
    console.log('param='+param);
    var obj=querystring.parse(param);
    console.log('querystring =>'+JSON.stringify(obj));
    console.log(pathname);
    try {
        router[pathname](request, response);
    }catch(err) {
        response.writeHead(200,{'Content-Type':'text/html,charset=utf-8'});
        response.write(err.toString());
        response.end();
    }
}).listen(8080);
console.log('Server is running at 127.0.1.1:8080')
var urlObj = {
    protocol: 'http:',
    slashes: true,
    hostname: 'itbilu.com',
    port: 80,
    hash: '#hash',
    search: '?query=string',
    path: '/nodejs?query=string'
}
var result = url.format(urlObj);
console.log(result);