function asyncify(fn) {
    var orig_fn = fn,
        intv = setTimeout(function () {
            intv = null
            if (fn) {
                fn()
            }
        }, 0)
    fn = null
    
    return function () {
        if (intv) {
            fn = orign_fn.bind.apply(
                orig_fn,
                [this].concat([].slice(arguments))
            )
        } else {
            orig_fn.apply(this, arguments)
        }
    }
}

function result(data) {
    console.log(a)
}

var a = 0
ajax("a.com", asyncify(result))
a += 1

function foo(x) {
    //do sth
    return listener
}

var evt = foo(42)
evt.on('completion', function () {
    //go on
})

evt.on('failure', function (err) {
    //sth went wrong
})

