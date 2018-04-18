let Promise = require('./myPromise01.js')

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 1000)
})

p.then(data => {
    console.log('成功', data)
}, err => {
    console.log('失败', err)
})