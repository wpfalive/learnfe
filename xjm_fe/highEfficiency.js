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

/**
 * 实现 applyCompare 函数
 * 参数如下
 * expression 是一个 array(数组), 包含了 3 个元素
 * 第一个元素是 op, 值是 '>' '<' '==' 其中之一
 * 剩下两个元素分别是 2 个数字
 * 根据 op 对数字运算并返回结果(结果是 true 或者 false)
 * @param  {[type]} expression [description]
 * @return {[type]}            [description]
 */
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

// applyOps(["+", 1, 2, 3, 5])


//为每一个函数写一个ensure
//用slice完成trim的功能，不要在循环内改变循环的条件
//过滤  "  gua  " length - 1 + ? = -2
//过滤 "  gua"
//过滤 "gua  "
//
//slice(2, -1)
function trim(str) {
    var start = 0,
        end = 0,
        len = str.length
    for(var i = 0; i < len; i++) {
        if(str[i] == " " && str[i + 1] != " ") {
            start = i + 1
        } if(str[i] != " " && str[i + 1] == " ") {
            end = i + 1
        }
    }

    end = len - 1 - end

    var res = str.slice(start).slice(end)
    return res
}

/* 删除字符串前后的空格
 * 不在循环内改变循环的条件
*/

function trim(str) {
    var start = 0,
        end = 0,
        len = str.length
    for(var i = 0; i < len; i++) {
        if(str[i] === " " && (str[i + 1] !== " " && str[i + 1] !== undefined)) {
            start = i + 1
        } if(str[i] !== " " && str[i + 1] === " ") {
            end = i + 1
        }
    }

    end = end - len

    var res = str.slice(start, end)
    return res
}

function ensure(condition, message) {
    if(!condition) {
        console.log(message)
    }
}

ensure(trim("  hello  ") === "hello", "trim出错了")






