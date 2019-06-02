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

app.get('/process_get',function(req,res){
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    }
    res.send(JSON.stringify(response))
})

var server = app.listen(3000,function(){
   console.log(`run at localhost:3000`)
})