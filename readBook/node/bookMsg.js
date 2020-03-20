var mongoose=require("mongoose");
var db = require("./db.js");

var bookMsg=new mongoose.Schema({             // 创建一个图书系统原型
    title:{type:String},
    info:{type:String},
    tag:{type:String},
    price:{type:String},
    id:{type:String},
})

var bookList = db.model('bookMsg', bookMsg);
module.exports = bookList;