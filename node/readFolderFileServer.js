var app = require('express')
var fs = require('fs')

app.use(function static(req, res, next) {
    var body = queryString.par
    var curPath = fs.readdir()
})

app.use(function (req, res, next) {
    console.log(1)
    
})

function compose(ary) {
    return ary.reduceRight((previous, curr) => {
        return function (req, res) {
            curr(req, res, function next() {
                previous(req, res)
            })
        }
    }, function next() {})
}

function static(dir) {
    return function (req, res, next) {
        fs.readFile(path.join(dir, req.url), function name(params) {
            if (err) {
                next()
            } else {
                req.end()
            }
        })
    }
    fs.stat(path, function (err, stat) {
        if (error) {
            next()
        } else {

        }
    })
}