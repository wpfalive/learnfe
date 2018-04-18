function foo(num) {
    console.log('num: ', num)
    foo.count += 1
}

foo.count = 0

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i)
    }
}

console.log(foo.count)
