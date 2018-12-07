// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');

var app = express()
app.use(cookieParser())
//我们可以使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息：
app.get('/', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
})

app.listen(8081)