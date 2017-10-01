'use strcit'

//导入包
const express = require('express')
const request = require('request')

//创建app
const app = express()

//设置允许跨域
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//使用app监听请求
app.get('/movieList',(req,res)=>{
    //1.获取参数(修改)
    const movieType = req.query.movieType

    //2.拼接url(修改)
    const url = "https://api.douban.com/v2/movie/"+movieType

    //3.使用request向豆瓣服务器发送请求
    request(url, function (error, response, body) {
        console.log(typeof body)
        // res.setHeader("Content-Type","application/json;charset=utf-8")
        // res.end(body)
        res.send(body)
    });
})

//启动服务
app.listen(3000,'127.0.0.1',(err)=>{
    if(err){
        console.log(err)
    }

    console.log("启动成功!!!")
})
