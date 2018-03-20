var express = require('express')
var app = express()

// /data/$book
app.all('/data/([\$])book', function (req, res, next) {
    res.send('hello world233')
    next()
})

app.get('/', function (req, res, next) {
    res.send('root')
    next()
})

app.get('/random.text', function (req, res) {
    res.send('random.text')
})

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})

app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
})

// 这个厉害了
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

app.get('/flights/:from-:to',
    function (req, res) {
    res.send(req.params)
    })

app.get('/user/:userId(\d+)',
    function (req, res) {
        res.send(req.params)
    })

app.listen(3000)