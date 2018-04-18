/**
 * 实现一个promise
 * 180402
 * https://mp.weixin.qq.com/s/rLwO1D7Rsc0pMxfLAMkNYA
 */

function Promise(executor) {
    let _this = this
    _this.value = ''
    _this.reason = ''
    _this.status = 'pending'
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []

    function resolve(value) {
        if (_this.status === 'pending') {
            _this.status = 'resolved'
            _this.value = value
            _this.onResolvedCallbacks.forEach(fn => {
                fn()
            })
        }
    }

    function reject(reason) {
        if (_this.status === 'pending') {
            _this.status = 'rejected'
            _this.reason = reason
            _this.onRejectedCallbacks.forEach(fn => {
                fn()
            })
        }
    }

    executor(resolve, reject)
}

Promise.prototype.then = function (onFufilled, onRejected) {
    let _this = this

    if (_this.status === 'resolved') {
        onFufilled(_this.value)
    }
    if (_this.status === 'rejected') {
        onRejected(_this.reason)
    }
    if (_this.status === 'pending') {
        _this.onRejectedCallbacks.push(function () {
            onFufilled(_this.value)
        })
        _this.onRejectedCallbacks.push(function () {
            onRejected(_this.reason)
        })
    }
}

module.exports = Promise