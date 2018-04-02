const p1 = Promise.resolve(42)
const p2 = Promise.resolve('Hello world')
const p3 = Promise.reject('oops')

Promise.all([p1, p2, p3]).then(msg => {
    console.log(msg)
})

// Promise.race([p1, p2, p3]).then(msg => {
//     console.log(msg)
// })