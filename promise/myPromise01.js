function Promise(executor) {
    const _this = this
    _this.status = 'pending'
    _this.value = ''
    _this.reason = ''
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []

    function resolve(value) {
        if (_this.status === 'pending') {
            _this.value = value
            _this.status = 'resolved'
            _this.onResolvedCallbacks.forEach(fn => {
                fn()
            })
        }
    }

    function reject(reason) {
        if (_this.status === 'pending') {
            _this.reason = reason
            _this.status = 'rejected'
            _this.onRejectedCallbacks.forEach(fn => {
                fn()
            })
        }
    }

    executor(resolve, reject)
}

Promise.prototype.then = function (onfulfilled, onrejected) {
    const _this = this
    if (_this.status === 'resolved') {
        onfulfilled(_this.value)
    }
    if (_this.status === 'rejected') {
        onrejected(_this.reason)
    }
    if (_this.status === 'pending') {
        //如果是pending状态，先缓存下来
        _this.onResolvedCallbacks.push(() => {
            onfulfilled(_this.value)
        })
        _this.onRejectedCallbacks.push(() => {
            onrejected(_this.reason)
        })

    }
}

module.exports = Promise