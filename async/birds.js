var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

//request url: http://localhost:3000/birds/daily/fly
router.get('/daily/fly', function (req, res) {
    res.send('call my girl friend')
})

module.exports = router