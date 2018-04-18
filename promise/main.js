let Promise = require('./myPromise.js')

let p = new Promise((resolve, reject) => {
    // resolve('test')
    reject('test')
})

p.then(data => {
    console.log('成功', data)
}, err => {
    console.log('失败', err)
})