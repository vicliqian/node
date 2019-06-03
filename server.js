var express = require("express");
var fs = require('fs');
var logger = require('morgan');
var path = require('path')
var  fileStreamRotator = require("file-stream-rotator")

var app = express()
// 静态文件
// app.use(express.static('../node', {
//     index: false
// }));
// app.get("/index",function(req,res){
//
//    res.sendFile(__dirname+'/index.html')
// })

/*
* 自定义日志输出内容
*  logger.format('qim',':method :url :status')
*  var logStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})
*  app.use(logger('qim',{
*    stream:logStream }))
*
* */



/*
* 日志分割
* */

var  logDirectory = path.join(__dirname,'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = fileStreamRotator.getStream({
    date_format:'yyyymmdd',
    filename:path.join(logDirectory,"access-%DATE%.LOG"),
    FREQUENCY:'daily',
    verbose: false
})
app.use(logger('short',{stream:accessLogStream}))


app.use(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("hello world")
})


var server = app.listen(3000,function(){
   console.log(`run at localhost:3000`)
})