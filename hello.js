/**
 * Created by ming on 2018/12/4.
 */
exports.word=function(){
    console.log('hello word');
}
function Hello(){
    var name;
    this.setName=function(name){
        this.name=name;
    }
    this.sayHello=function(){
        console.log('hello '+this.name);
    }
}
module.exports=Hello;