var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1995',
    database : 'php'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

var sql="select * from  user";
//查询
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});


//新增数据
var  addSql = 'insert into user(name,sex,age) value(?,?,?)';
var  addSqlParams = ['LeeJunMing', '女',18];
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

//修改数据
var modSql = 'UPDATE user SET sex = ?,age = ? WHERE name = ?';
var modSqlParams = ['男', 22,'LeeJunMing'];
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

//删除数据
var delSql = 'DELETE FROM user where name=? and sex=?';
connection.query(delSql,['LeeJunMing','男'],function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});