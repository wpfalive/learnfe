const fs = require('fs')

global.myRequire = function (path) {
    
}

global.cache[path] = {}


const m1 = myRequire('./m1.js')
const m2 = myRequire('./m2.js')