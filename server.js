var express = require("express");
var fs = require('fs');
var app = express()
var bodyParser = require('body-parser')
/*
* form 表单post
* */
// 静态文件
app.use(express.static('../node', {
    index: false
}));
app.get("/index",function(req,res){

   res.sendFile(__dirname+'/index.html')
})

var urlencoded = bodyParser.urlencoded({extended:false})
app.post('/process_get',urlencoded,function(req,res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    }
    console.log(response)
    res.send(JSON.stringify(response))
})

var server = app.listen(3000,function(){
   console.log(`run at localhost:3000`)
})