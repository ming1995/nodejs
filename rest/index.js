var express = require('express');
var app = express();
var fs = require("fs");
//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
//查询json数据
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

//添加用户
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})
//根据用户id查看某个用户
app.get('/selectOne/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

//删除某个数据
app.get('/deleteUser/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + req.params.id];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})



var server = app.listen(8081, function () {
    var port = server.address().port
    console.log("应用实例，访问地址为 http://127.0.0.1:%s", port)

})