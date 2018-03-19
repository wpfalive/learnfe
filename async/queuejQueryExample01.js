/**.queue( [queueName ], callback )
 * callback
 * Type: Function( Function next() )
 * The new function to add to the queue, with a function to call that will dequeue the next item.
 */

// var q = {
//     _tasks: [],
//     _next: function () {
//         if (this._tasks.length) {
//             let nextFunction = this._tasks.shift()
//             nextFunction(this._next)
//         }
//     },
//     // f有一个参数 next, 也是一个函数，用于从任务队列里取出下一个任务并执行
//     add: function (f) {
//         if (!this._tasks.length) {
//             // 这个next函数做一件事情: 从任务列表中找出下一个任务并执行
//             f(this._next)
//         } else {
//             this._tasks.push(f)
//         }
//     }
// }

// setInterval(() => console.log(1), 1000)

 // 上面的写法 




// var q2 = {
//     _tasks: [],
//     _next: function () {
//         if (this._tasks.length) {
//             var nextFunction = this._tasks.shift()
//             nextFunction(this._next)
//          }
//     },
//     add: function (f) {
//         if (!this._tasks.length) {
//             f(this._next)
//         } else {
//             this._tasks.push(f)
//         }
//     }
//  }


q3 = {
    _running: false,
    _tasks: [],
    _next: function () {
        if (q3._tasks.length) {
            let nextFunction = q3._tasks.shift()
            nextFunction(q3._next)
        } else {
            q3._running = false
        }
    },
    add: function (f) {
        if (!this._running) {
            this._running = true
            f(this._next)
        } else {
            this._tasks.push(f)
        }
        return this
    }
}

q3.add(next => {
    console.log(1)
    setTimeout(next, 2000)
}).add(next => {
    console.log(2)
    setTimeout(next, 4000)
}).add(next => {
    console.log(3)
    next()
}).add(next => {
    console.log(4)
    next()
}).add(next => {
    console.log(5)
    setTimeout(next, 1000)
    })

// 为了不在next中使用q3，改成这样

q3 = {
    _running: false,
    _tasks: [],
    add: function (f) {
        var next = () => {
            if (this._tasks.length) {
                let nextFunction = this._tasks.shift()
                nextFunction(next)
            } else {
                this._running = false
            }
        }

        if (!this._running) {
            this._running = true
            f(next)
        } else {
            this._tasks.push(f)
        }
        return this
    }
}

// 但这样每次运行add都会生成一个next函数
// 改进： 写成class
// 每个实例的next是不同的，因为a实例的next不能使b实例调用下一个函数
class Queue {
    constructor() {
        this._tasks = []
        this._running = false
        this.next = () => {
            if (this._tasks.length) {
                let nextFunction = this._tasks.shift()
                nextFunction(this.next)
            } else {
                this._running = false
            }
        }
    }

    // add是原型上的属性
    add(f) {
        if (!this._running) {
            this._running = true
            f(this.next)
        } else {
            this._tasks.push(f)
        }
        return this
    }
}

// 调用

new Queue().add(next => {
    console.log(1)
    setTimeout(next, 2000)
}).add(next => {
    console.log(2)
    setTimeout(next, 4000)
}).add(next => {
    console.log(3)
    next()
}).add(next => {
    console.log(4)
    next()
}).add(next => {
    console.log(5)
    setTimeout(next, 1000)
    })


// 再改进，如果next函数中不能使用箭头函数，要怎么使用this

class Queue {
    constructor() {
        var self = this //后续一直使用self
        self._tasks = []
        self._running = false
        self.next = function () { //这个函数里面，由于不是箭头函数，不能直接使用外部的this
            if (self._tasks.length) {
                let nextFunction = self._tasks.shift()
                nextFunction(self.next)
            } else {
                self._running = false
            }
        }
    }

    // add是原型上的属性
    add(f) {
        if (!this._running) {
            this._running = true
            f(this.next)
        } else {
            this._tasks.push(f)
        }
        return this
    }
}

// 再改一种写法
// 只要来了一个函数，不管当前又没有函数正在运行，都添加到任务队列里

class Queue2 {
    constructor() {
        var self = this //后续一直使用self
        self._tasks = []
        self._running = false
        self.next = function () { //这个函数里面，由于不是箭头函数，不能直接使用外部的this
            if (self._tasks.length) {
                let nextFunction = self._tasks.shift()
                nextFunction(self.next)
            } else {
                self._running = false
            }
        }
    }

    _start() {
        //_start是add时候调用的，所以可以保证数组总是有长度的
        var f = this._tasks.shift()
        this._running = true
        f(this.next)
    }
    // add是原型上的属性
    add(f) {
        this._tasks.push(f)
        if (!this._running) {
            this._start()
        }
        return this
    }
}

// 再改进 换一种思路 不用running了

class Queue3 {
    constructor() {
        var self = this //后续一直使用self
        self._tasks = []
        // self._running = false
        self.next = function () { //这个函数里面，由于不是箭头函数，不能直接使用外部的this
            if (self._tasks.length) {
                let nextFunction = self._tasks.shift()
                nextFunction(self.next)
            } else {
                // self._running = false
            }
        }
    }

    _start() {
        var f = this._tasks.shift()
        setTimeout(() => {
            f(this.next)
        })
    }
    // add是原型上的属性
    add(f) {
        if (!this._tasks.length) {
            this._tasks.push(f)
            this._start()
        } else {
            this._tasks.push(f)
        }
        return this
    }
}