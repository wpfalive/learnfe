//The methods on the response object(res) in the following table can send a response to the client, and terminate the request - response cycle.If none of these methods are called from a route handler, the client request will be left hanging.

var express = require('express')

var app = express()

// 浏览器发送post请求
// 但是响应结果没办法显示在页面上
// javascript: void ((function () { fetch(new Request('http://localhost:3000/book', { method: 'POST' })).then((resp) => { console.log(resp) }) })())
// fetch(new Request('http://localhost:3000/book',{method:'POST'})).then((resp)=>{console.log(resp)}) 

app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*")
        console.log('post received')
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

// 加载了一个路由模块
var birds = require('./birds')
app.use('/birds', birds)

app.listen(3000)

