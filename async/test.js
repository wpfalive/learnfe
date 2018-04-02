function get(val) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(val)
        }, Math.random() * 1000);
    })
}

// Promise.all2 = function (promises) {
//     return new Promise(function (resolve, reject) {
//         let l = promises.length
//         let result = new Array(l)
//         let count = 0
//         for (let i = 0; i < l; i++) {
//             promises[i].then(value => {
//                 result[i] = value
//                 count += 1
//                 if (l === count) {
//                     resolve(result)
//                 }
//             }, reason => {
//                 reject(reason)
//             })
//         }
//     })
// }

// 1. 接收一个数组，每个元素都是promise
// 2. 所有任务都完成之后才resolve
// 3. 有一个失败就全都失败 reject
// 4. 返回一个promise 
Promise.all3 = function (promises) {
    return new Promise(function (resolve, reject) {
        let count = 0
        let result = []
        let l = promises.length
        for (let i = 0; i < l; i++) {
            
            promises[i].then(value => {
                count += 1
                result[i] = value
                if (count === l) {
                    resolve(result)
                } 
            }, reason => {
                reject(reason)
            })
            
        }
    })
}

Promise.all3([
    get(1),
    get(2), 
    get(3)
]).then(values => console.log(values))

