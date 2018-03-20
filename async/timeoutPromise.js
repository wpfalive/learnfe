function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timeout!")
        }, delay)
    })
}
// 设置foo()超时 
Promise.race([
foo(),
    timeoutPromise(3000)
]).then(
    function () {
        // foo(..)及时完成!
        console.log(1)
    },
    // 试着开始foo() // 给它3秒钟
        function (err) {
    console.log(err)
        // 或者foo()被拒绝，或者只是没能按时完成 // 查看err来了解是哪种情况
    })

function foo() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('foo done')
        }, 3100)
    })
}