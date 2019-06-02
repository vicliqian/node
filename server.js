var express = require("express");
var fs = require('fs');
var app = express()
// 静态文件
app.use(express.static('../node', {
    index: false
}));
app.get("/index",function(req,res){

   res.sendFile(__dirname+'/index.html')
})

var server = app.listen(3000,function(){
   console.log(`run at localhost:3000`)
   console.log(__dirname)
})