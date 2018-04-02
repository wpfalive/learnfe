const fs = require('fs')

const wrequire = function (path) {
    console.log(path, __dirname)
    // if (module.cache[path]) {
    //     return wrequire.cache[path].exports
    // }
    // const code = fs.readFileSync(path).toString()
    // 直接这样写在node控制台没有问题
     const code = fs.readFileSync('./add.js').toString()
    console.log(code)

    const codeFunction = new Function('module, exports', code)
    const module = {}
    codeFunction(module, module.exports)
    // wrequire.cache[path] = module
    return module.exports
}

const add = wrequire('add.js')
console.log(add(1, 2))


