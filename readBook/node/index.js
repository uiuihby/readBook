var express = require("express");
var app = express();
var bookMsg = require("./bookMsg.js")
// 各种依赖
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// 处理为json格式
app.use(express.static("./public"));




app.post('/addBook', function (req, res) {  //  新增
    var result = req.body
    var newBook = new bookMsg(result);
    newBook.save(function () {
        res.send("success");
    });
})

app.delete('/deleteBook', function (req, res) {  //  删除
    var id = req.query.id
    bookMsg.remove(
        { '_id': id },
        (err, docs) => {
            if (err) { return console.log('删除数据失败') }
            res.send("success")
        }
    )
})

app.put('/editBook', function (req, res) {  //  修改
    var result = req.body
    bookMsg.update({"_id":result.id},result,function (err,doc) {
        if(err)
        {
            console.log(err)
            return
        }
        res.send("success")
    })
})


app.get("/getBookList", function (req, res) {
    bookMsg.find({}, (err, docs) => {         // 查询
        if (err) {
            console.log(err);
            return;
        }
        res.send(docs);
    });
})
app.get("/getBookInfo", function (req, res) {
    var id = req.query.id
    console.log(req.query);

    bookMsg.find({_id:id}, (err, docs) => {         // 查询
        if (err) {
            console.log(err);
            return;
        }
        res.send(docs);
    });
})

app.use(express.static("dist")).listen(5000);




