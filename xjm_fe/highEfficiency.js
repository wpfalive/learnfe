/**
 * 实现 applyList 函数
 * op 是 '+' '-' '*' '/' 其中之一
 * oprands 是一个只包含数字的 array
 * 根据 op 对 oprands 中的元素进行运算并返回结果
 * 例如, 下面的调用返回 -4
 * var n = applyList('-', [3, 4, 2, 1])
 * log(n)
 * 结果是 4, 用第一个数字减去所有的数字
 * @param  {[type]} op      [description]
 * @param  {[type]} oprands [description]
 * @return {[type]}         [description]
 */
var applyList = function(op, oprands) {
    return oprands.reduce((prev, curVal, index) => {
        return apply(op, prev, curVal)
    })
}

var apply = function(op, a, b) {
    if (op == "+") {
        return a + b
    } else if (op == "-") {
        return a - b
    } else if (op == "*") {
        return a * b
    } else if (op == "/") {
        return a / b
    }
}

var applyCompare = function(expression) {
    var op = expression[0],
        a = expression[1],
        b = expression[2]

    if (op == ">") {
        return a > b
    } else if (op == "<") {
        return a < b
    } else if (op == "==") {
        return a == b
    }
}

// applyCompare([">", 3, 5])

function applyOps(expression) {
    var op = expression[0]

    if (op == ">" || op == "<" || op == "==") {
        return applyCompare(expression)
    } else if (op == "+" || op == "-" || op == "*" || op == "/") {
        return applyList(op, expression.slice(1))
    }
}

applyOps(["+", 1, 2, 3, 5])