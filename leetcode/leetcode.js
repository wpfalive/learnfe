/**
 * https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 * digit root
 * dn = 1 + (n - 1) % 9
 */

var addDigits = function(num) {
    return 1 + (num - 1) % 9
};

/**
 * https://leetcode.com/problems/plus-one/description/
 * @param {number[]} digits
 * @return {number[]}
 * 用一个数组表示一个整数，对这个整数加1，然后返回加之后的数组
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 * 用一个数组表示一个整数，对这个整数加1，然后返回加之后的数组
 */
var plusOne = function(digits) {
    // 999 899
    var result = '',
        c = 1
    var resultArr = []
    while (digits.length) {
        c = digits.pop() + c
        result = c % 10 + result
        c = c > 9
    }

    if (c == 1) {
        result = "1" + result //"1234"
    }

    for (var i = 0; i < result.length; i++) {
        resultArr.push(+result.charAt(i))
    }

    return resultArr
};


/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/submissions/detail/129272498/
 */
var findMaxConsecutiveOnes = function(nums) {
    //当前连续数量
    var curKeep = 0
        //历史连续数量
    var hisKeep = 0

    var result = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            curKeep++
            if (curKeep > hisKeep) {
                hisKeep = curKeep
            }
        } else {
            curKeep = 0
        }

        //result = (nums[i] == 1) ? result ++ : 0
    }

    return hisKeep
};


/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode.com/problems/fizz-buzz/description/
 */
var fizzBuzz = function(n) {
    var arr = []
    for (var i = 1; i <= n; i++) {
        var result = ""
        if (i % 3 == 0) {
            result += "Fizz"
        }
        if (i % 5 == 0) {
            result += "Buzz"
        }

        arr.push(result || i + "")
    }

    return arr
};

/**
 * @param {number} num
 * @return {string}
 * https://leetcode.com/problems/base-7/description/
 */
var convertToBase7 = function(num) {
    var res = ""
    var n = 0
    var flag = num > 0 ? 1 : -1
    if (num == 0) {
        res = "0"
    }

    num *= flag

    while (num != 0) {

        n = num % 7
        num = (num - n) / 7
        res = n + res
    }

    res = flag * (+res) + ""
    console.log(typeof res)

    return res
};

/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/submissions/detail/129342000/
 */
var singleNumber = function(nums) {
    var result = nums[0]
    for (var i = 0; i < nums.length; i++) {
        result = result ^ nums[i + 1]
    }

    return result
};


/**
 * @param {function} isBadVersion()
 * @return {function}
 * https://leetcode.com/problems/first-bad-version/description/
 */
var solution = function(isBadVersion) {

    //二分法
    return function(n) {
        var start = 1,
            end = n
        while (start <= end) {
            mid = parseInt(start + (end - start) / 2)
            if (!isBadVersion(mid)) {
                start = mid + 1
            } else if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid
            } else {
                end = mid - 1
            }
        }
    };
};

/**
 * @param {number} n
 * @return {boolean}
 *  https://leetcode.com/problems/happy-number/description/
 */
/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.com/problems/happy-number/description/
 */
var isHappy = function(n) {
    //用一个数组将所有产生的数，进来的时候先判断数组里是否有这个数
    var met = []
    while (n != 1) {
        n = sum(n)

        if (met[n] != undefined) {
            return false
        }

        met[n] = n
    }
    return true
};

//给定一个整数n，求n每个位上所有数字平方的sum，返回这个sum
var sum = function(n) {
    var result = 0
    while (n != 0) {
        var tmp = 0
        tmp = n % 10
        result += tmp * tmp
        n = (n - tmp) / 10
    }
    return result
}

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var position = [0, 0]
        // {index, +-1}
    var rlud = {
        "R": {
            "index": 0,
            "dir": 1
        },
        "L": {
            "index": 0,
            "dir": -1
        },
        "U": {
            "index": 1,
            "dir": 1
        },
        "D": {
            "index": 1,
            "dir": -1
        },
    }

    for (var i = 0; i < moves.length; i++) {
        position[rlud[moves[i]]["index"]] += rlud[moves[i]]["dir"]
    }

    if (position[0] == 0 && position[1] == 0) {
        return true
    }
    return false
};

//交换两个变量的值
//a  = a ^ b
//b = a ^ b
//a = a ^ b

//判断n是否为某个数的平方
var isPowerOfTwo = function(n) {
    var start = 0,
        end = n

    while (start <= end) {
        mid = parseInt(start + (end - start) / 2)
        if (mid * mid == n) {
            return true
        } else if (mid * mid < n) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
};

/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.com/problems/power-of-two/description/
 * 判断n是否为2的幂
 * 2的x次幂，表示为2进制数为100...00
 * 那么 n & (n - 1)一定为0
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & n - 1) === 0
};

//web 
/**
 * @param {number} n
 * @return {boolean}
 * loga b=logc b/logc a (a>0且a≠0,c>0且c≠1,b>0) 
 * 用换底公式？
 */
var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log(n / 4) / Math.log(2));
};

//写一个程序，统计自身用了多少字符


/*
https://leetcode.com/problems/excel-sheet-column-title/description/
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 

   1 -> A  27 -> AA
   2 -> B  28 -> AB
   3 -> C  29 -> AC
   ...
   26 -> Z 52 -> AZ

 @param {number} n //52 AZ
 @return {string}  
 
*/
/* 1 -> A 27 -> AA   53 -> BA
   2 -> B 28 -> AB   54 -> BB
   3 -> C 29 -> AC   55 -> BC
   ...
   26 -> Z 52 -> AZ  78 -> BZ

*/

/* 1 -> A 27 -> AA   53 -> BA
   2 -> B 28 -> AB   54 -> BB
   3 -> C 29 -> AC   55 -> BC
   ...
   26 -> Z 52 -> AZ  78 -> BZ

*/

var convertToTitle = function(n) {
    var digits = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z'
    ]
    var result = ""
    var rem = 0 //记录每次对26取模的余数

    while (n) {
        rem = n % 26
        if (rem == 0) {
            result = "Z" + result
            n = (n - rem) / 26 - 1
        } else {
            result = digits[rem - 1] + result
            n = (n - rem) / 26
        }
    }

    return result

};
convertToTitle(26)
convertToTitle(51)
convertToTitle(52)
convertToTitle(80)
convertToTitle(676)
convertToTitle(702)
convertToTitle(705)
    //52 AZ 27 AA 28 AB
convertToTitle(52)

/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

};

/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
*/
/**
 * @param {number} num
 * @return {number[]}
 */
/*-----Version 1--------*/
var countBits = function(num) {
    var number = new Array(num + 1)
    for (var i = 0; i <= num; i++) {
        number[i] = count1s(i)
    }

    return number
};

function count1s(n) {
    var count = 0,
        digit = 0
    while (n) {
        digit = n % 2
        n = (n - digit) / 2
        if (digit) {
            count++
        }
    }
    return count
}

/*-----Version 2 A better way 归纳法--------*/

var countBits = function(num) {
    var number = new Array(num + 1)
    number[0] = 0
    var next_two_power = 1
    var prev_two_power
    if (num == 0) {
        return number
    }

    for (var i = 1; i <= num; i++) {
        if (i == next_two_power) {
            number[i] = 1
            prev_two_power = next_two_power
            next_two_power *= 2
        } else {
            // i - prev_two_power 用于计算当前元素到上一个2的幂的距离
            // 这个距离也就等于第一个2的幂到0的距离 
            // 这道题的关键在于0-3 4-7 8-15 之间，都是上一组数包含1的个数，再加1
            number[i] = number[i - prev_two_power] + 1
        }
    }
    return number
};

/*
 * https://leetcode.com/problems/power-of-two/description/
 * Given an integer, write a function to determine if it is a power of two.
 * @param {number} n
 * @return {boolean}
 * 判断n是否为2的幂
 * 2的x次幂，表示为2进制数为100...00
 * 那么 n & (n - 1)一定为0
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & n - 1) === 0
};

/*
 https://leetcode.com/problems/power-of-four/description/
* Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
* 
*  4 ** n =>  2 ** 2n == > 写成2进制表示，1 00..00， 1右边一定有偶数个0 
   如何判断1右边有偶数个0？  找一个数字magic(101010101010)，与num进行&运算
   如果结果为0，说明1右边有偶数个0
   另外，4的幂，一定是2的幂
   magic是形如 0b0101010101010的三十一位二进制数(因为题目给出的是32 bits整数)
 * @param {number} num
 * @return {boolean}
 */
/**
 * @param {number} num
 * @return {boolean} 715827882 转成二进制只有三十位？？？
 
 */
var isPowerOfFour = function(num) {
    // if((num > 0) && (num & (num - 1) === 0) && (num & 715827882) === 0) {
    //     return true
    // } 
    if (num > 0) {
        if ((num & (num - 1)) === 0) {
            if ((num & 715827882) === 0) {
                return true
            }
        }
    }

    return false
};

/**
https://leetcode.com/problems/move-zeroes/description/
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 把所有非零元素依次向前移动，记录当前移动到了第几个下标
 */
var moveZeroes = function(nums) {
    var curIndex = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[curIndex] = nums[i]
            curIndex++
        }
    }

    for (var i = curIndex; i < nums.length; i++) {
        nums[i] = 0
    }
};
/*
https://leetcode.com/problems/rotate-array/description/
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/*version 1*/
var rotate = function(nums, k) {
    //每次从数组末尾pop, 然后从数组开头unshift

    for (var i = 0; i < k; i++) {
        var end = nums.pop()
        nums.unshift(end)
    }
};

var rotate = function(nums, k) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        arr[(i + k) % nums.length] = nums[i];
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};


/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
two-pass
 */
var sortColors2 = function(nums) {
    var ones = 0, twos = 0, zeros = 0, curIndex = 0
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            ones ++
        } else if(nums[i] === 2) {
            twos ++
        } else {
            zeros ++
        }
    }
    
    for(var i = 0; i < nums.length; i++) {
        if(i < zeros) {
            nums[i] = 0
        } else if(i < ones + zeros) {
            nums[i] = 1
        } else {
            nums[i] = 2
        }
    }
};

/**
 * one-pass 主要思想为，遇到0就向左移动，遇到2就向右移动
 * 向左移动元素可能的情况是 1,0,0这时需要把0移动到左边，移动后，curPos指向1，因此需要再+1
 * 向右移动元素可能的情况是，1,2,0，curPos原本指向2，移动后，curPos的值不变，这时就自动指向0了
 * 
 * 移动后
 * 
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var sortColors = function(nums) {
    //i用作下标，curPos指示当前的元素
    curPos = 0
    for(var i = 0; i < nums.length; i++) {
        if(nums[curPos] === 0 && i != 0) {
            nums.splice(curPos, 1)
            nums.unshift(0)
            curPos++
        } else if(nums[curPos] === 2) {
            nums.splice(curPos, 1)
            nums.push(2)
        } else {
            curPos ++
        }

    }
};

// one pass in place solution
//leetcode上的其他方法，没有看明白
var sortColors1 = function(A) {
    var n0 = -1, n1 = -1, n2 = -1
    for (var i = 0; i < A.length; ++i) {
        if (A[i] == 0) 
        {
            A[++n2] = 2
            A[++n1] = 1
            A[++n0] = 0
        }
        else if (A[i] == 1) 
        {
            A[++n2] = 2
            A[++n1] = 1
        }
        else if (A[i] == 2) 
        {
            A[++n2] = 2
        }
    }
};



/**
 * @param {number} n
 * @return {boolean}
 * 判断给定的数是否是3的x次幂
 * 
 * https://leetcode.com/problems/power-of-three/description/
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 * 思路
 * 1162261467是3的19次方。为什么选到了3的19次方？
 * 因为3的19次方是小于2147483647的最大的3的x次方
 * 3的20次方等于348684401，大于了2147483647,会越界
 * 推广：这个办法可以用来判断一个数是否是5的x次方
 * Math.log(2147483647) / Math.log(2147483647) = 13
 * 5 ** 13 = 1220703125, 那么只要 1220703125 % n == 0
 * 我们就可以确定 n 一定是5的x次方
 * 可以用来判断所有的素数
 * 
 */
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n == 0
};

/**
 * https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//每次把遍历到的数x的下标存在对象里。判断另一半的数target - x是否已经在对象里了。如果在，
//就返回target-x的下标和x的下标
var twoSum = function(nums, target) {
    var numObj = {},
        factor
    
    for(var i = 0; i < nums.length; i++) {
        factor = target - nums[i]
        if(factor in numObj) {
            return [numObj[factor], i]
        } else {
            numObj[nums[i]] = i
        }
    }
};


//由于需要对数组进行排序再查找，排序后的下标就不是原来的下标了，因此要保存一份原来的数组，用于确定之前的下标是多少
var twoSum2 = function(nums, target) {

    var numsOrigin = nums.slice()
    
    nums.sort((a, b) => a - b)
    //左边的下标和右边的下标
    var curLeft = 0,
        curRight = nums.length - 1,
        res = new Array(2)
    for(var i = 0; i < nums.length; i++) {
        var curSum = nums[curLeft] + nums[curRight]
        if(curSum == target) {
            res[0] = curLeft
            res[1] = curRight
            break
        } else if(curSum > target) {
            curRight --
        } else {
            curLeft ++
        }
    }
    if(nums[res[0]] === nums[res[1]]) {
        res[0] = numsOrigin.indexOf(nums[res[0]])
        res[1] = numsOrigin.lastIndexOf(nums[res[1]])
     } else {
        res[0] = numsOrigin.indexOf(nums[res[0]])
        res[1] = numsOrigin.indexOf(nums[res[1]])
     }


    return res
};

/**
 * https://leetcode.com/problems/single-number-ii/description/
 * Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @param  {[type]} int[] A             [description]
 * @return {[type]}       [description]
 */

/*我的版本，使用的一个对象去记录每个数字出现的次数，然后找出出现一次的那个数*/
var singleNumber = function(nums) {
    var map = {}
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            map[nums[i]]++
        } else {
            map[nums[i]]=1
        }
    }
    
    for(var item in map) {
        if(map[item] === 1) {
            return +item
        }
    }
};

/**
 * 
 * Beautiful. Let me describe it to see if I'm understanding it right:

First time number appear -> save it in "ones"

Second time -> clear "ones" but save it in "twos" for later check

Third time -> try to save in "ones" but value saved in "twos" clear it.

 * @param  {[type]} int[] A             [description]
 * @return {[type]}       [description]
 */
public int singleNumber(int[] A) {
    int ones = 0, twos = 0;
    for(int i = 0; i < A.length; i++){
        ones = (ones ^ A[i]) & ~twos;
        twos = (twos ^ A[i]) & ~ones;
    }
    return ones;
}







