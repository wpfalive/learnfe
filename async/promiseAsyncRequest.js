// function ajax(url, cb) {
//     setTimeout(() => {
//         cb(url)
//     }, 1000);
    
// }

// function request(url) {
//     ajax(url, (url) => {
//         console.log(`接收${url}返回数据完毕`)
//     })
// }

// // request('www.baidu.com')

// function requestPromisefy(url) {
//     return new Promise(function (resolve, reject) {
//         ajax(url, resolve)
//     })
// }

// requestPromisefy('www.baidu.com').then(function (response1) {
//     foo.bar()
//     console.log('foo.bar')
// }).then(function () {
//     function fullfilled() {
//         //不会到这里
//     }
//     }, function rejected(err) {
//         console.log(err)
//         return 42
//     }).then(function (msg) {
//     console.log(msg)
// })

var rejectedPr = new Promise(function (resolve, reject) { // 用一个被拒绝的promise完成这个promise
    resolve(Promise.reject("Oops"));
})

rejectedPr.then(
    function fulfilled() {},
    function rejected(err) {
        console.log(err); // "Oops"
    }
)


