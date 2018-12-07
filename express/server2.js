var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//用于解析文件上传
var fs = require('fs');
var multer  = require('multer');
//设置上传的目录和类型
app.use(multer({ dest: 'tmp/'}).array('image'));
//设置静态资源
app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/get_data', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "type":"Get",
        "name":req.query.name,
        "age":req.query.age
    };
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    console.log(response);
    res.end(JSON.stringify(response));
})
app.post('/post_data', urlencodedParser, function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    // 输出 JSON 格式
    var response = {
        "type":"Post",
        "name":req.body.name,
        "age":req.body.age
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {
    console.log(req.files[0]);  // 上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, function () {
    var port = server.address().port
    console.log("应用实例，访问地址为 http://127.0.0.1:%s", port)

})