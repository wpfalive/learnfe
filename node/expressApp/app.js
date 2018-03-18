var express = require('express')
var path = require('path')

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.get('/info/users/:userId/books/:bookId', function(req, res) {
	res.send(req.params)
})
app.post('/', function(req, res) {
	res.send('Got a POST request')
})
app.use(express.static('files'))
app.use(express.static('public'))
app.use('/static', express.static('public'))
var fullPath = path.join(__dirname, 'public')
console.log(fullPath)
app.use('/static', express.static(fullPath))

app.use(function(req, res, next) {
	res.status(404).send("Sorry can't find that")
})

app.use(function(err, req, res, next) {
	console.log(err.stack)
	req.status(500).send("something break!")
})

var server = app.listen(3000, function () {
var host = server.address().address
var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
