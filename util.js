var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
//继承对象原型链属性
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
//把对象转换成字符串
console.log(util.inspect(obj,true,null,true));

//判断对象是否是数组
console.log(util.isArray([]));// true
console.log(util.isArray(new Array));// true
console.log(util.isArray({})); //false

//判断对象是否正则表达式
console.log(util.isRegExp(/some regexp/));// true
console.log(util.isRegExp(new RegExp('another regexp')));// true
console.log(util.isRegExp({}));// false

//判断对象是否是日期
console.log(util.isDate(new Date())); //true
console.log(util.isDate('1995 12')); //false

//判断对象是否是error对象
console.log(util.isError(new Error())); //true