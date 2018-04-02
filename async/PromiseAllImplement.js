function get(val) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => { 
            resolve(val)
        }, Math.random() * 5000);
    })
}

Promise.all = function (promises) {
    return new Promise(function(resolve, reject) {
        let count = 0
        let result = []
        let l = promises.length
        for (let i = 0; i < l; i++) {
            promises[i].then(val => {
                count += 1
                result[i] = val
                if (count === l) {
                    resolve(result)
                }
            }, reason => {
                reject(reason)
            })
        } 
    })
}

Promise.all([
    get(1),
    get(2),
    get(3)
]).then(val => {
    console.log(val)
})