// 多个迭代器

// function* foo() {
//     var x = yield 2
//     z++
//     var y = yield (x * z)
//     console.log(x, y, z)
// }
// var z = 1
// var it1 = foo()
// var it2 = foo()
// var val1 = it1.next().value   // 2
// var val2 = it2.next().value   // 2
// val1 = it1.next(val2 * 10).value // 40   <-- x:20,  z:2
// val2 = it2.next(val1 * 5).value  // 600  <-- x:200, z:3
// it1.next(val2 / 2) // y:300 // 20 300 3
// it2.next(val1 / 4) // y:10  // 200 10 3


function* foo() {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
}
function* bar() {
    b--;
    yield;
    a = (yield 8) + b
    b = a * (yield 2)
}

function step(gen) {
    const it = gen()
    let last
    return function () {
        last = it.next(last).value
    }
}

a = 1
b = 2
var s1 = step(foo);
var s2 = step(bar);
// 首次运行*foo() s1();
s1() // a = 2, b = 2
s1() // b = 4, a = 3
// 现在运行*bar() s2();
s2() // b = 3, a = 3
s2() // a = 3, b = 3
s2() // a = 3, b = 3
s2() // a = 3, b = 24
console.log(a, b)



