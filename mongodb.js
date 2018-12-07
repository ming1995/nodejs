var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

//连接数据库
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库连接已创建!");
    //创建表
    var dbase = db.db("mydb");
    dbase.createCollection('user', function (err, res) {
        if (err) throw err;
        console.log("创建user集合!");
    });
    //插入1数据
    var myobj = { name: "LeeJunMing", age: 18};
    dbase.collection("user").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
    });

    //插入多条数据
    var myobjs =  [
        { name: 'Min', age:17},
        { name: 'Jetty', age:19},
        { name: 'Facebook', age:20}
    ];
    dbase.collection("user").insertMany(myobjs, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
    })

    //修改数据 updateOne修改一个,updateMany修改多个
    var whereStr = {age:17};  // 修改条件
    var updateStr = {$set: { "sex" : "男" }};
    dbase.collection("user").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
    });
    //删除数据 deleteOne删除一个,deleteMany删除多个
    var whereStr = {age:18};  // 查询条件
    dbase.collection("user").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log("文档删除成功");
    });

    var condition={age:17};
    //指定查询数据
    dbase.collection("user"). find(condition).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
    });
    //排序  {age:1}  1为升序, -1为降序
    dbase.collection("user").find().sort({age:1}).toArray(function(err, result) {
        if (err) throw err;
        console.log("排序查询*******************************************");
        console.log(result);
    });
    //查询分页  skip代表跳过的记录数,limit查询的记录数
    dbase.collection("user").find().skip(2).limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log("分页查询*******************************************");
        console.log(result);
    });

    //插入左连接数据
    dbase.createCollection('orders', function (err, res) {
        if (err) throw err;
        console.log("创建orders集合!");
    });
    dbase.createCollection('products', function (err, res) {
        if (err) throw err;
        console.log("创建products集合!");
    });
    dbase.collection("orders").insertOne({ _id: 1, product_id: 154, status: 1 }, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
    });
    dbase.collection("products").insertMany([{ _id: 154, name: '笔记本电脑' },{ _id: 155, name: '耳机' },{ _id: 156, name: '台式电脑' }], function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
    })
    //$lookup 实现左连接
    dbase.collection('orders').aggregate([
        { $lookup:
                {
                    from: 'products',            // 右集合
                    localField: 'product_id',    // 左集合 join 字段
                    foreignField: '_id',         // 右集合 join 字段
                    as: 'orderdetails'           // 新生成字段（类型array）
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log("左连接查询");
        console.log(JSON.stringify(res));
    });
    //删除集合
    // dbase.collection("user").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
    //    if (err) throw err;
    //    if (delOK) console.log("集合已删除");
    // });
    //db.close();
});


