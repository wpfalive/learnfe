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

/**
 * https://leetcode.com/problems/rotate-list/description/
 * Given a list, rotate the list to the right by k places, where k is non-negative.
 * Given 1->2->3->4->5->NULL and k = 2,

 * return 4->5->1->2->3->NULL.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/*
实现链表的pop和unshift方法
A -> B -> C -> D -> E
D -> E -> A -> B -> C 实际移动的位置是 k % lenght, 因为一个元素移动length步，整个队列就恢复了原来的样子

*/
var rotateRight = function(head, k) {
    if(!head) {
        return null
    }
    // if(!head.next) {
    //     return head
    // }
    
    //统计队列的结点数
    var length = 1,
        tail = head,
        newHead = head
    
    while(tail.next) {
        tail = tail.next
        length++
    }
    //循环结束后，tail指向最后一个结点
    //这时把最后一个结点指向头结点
    tail.next = head
    
    //如果k%length为0，那么整个列表移动之后恢复了原来的样子
    //如果k%length不为0，那么移动余数步
    if(k %= length) {
        for(var i = 0; i < length - k; i++) {
            tail = tail.next
        }
    }
    
    newHead = tail.next
    tail.next = null
    
    return newHead
};


/**
 * Reshape the Matrix
 * https://leetcode.com/submissions/detail/130627000/
 * @param  {[type]} nums [description]
 * @param  {[type]} r    [description]
 * @param  {[type]} c    [description]
 * @return {[type]}      [description]
 */
var sameNumItems = function (nums, r, c) {
    var matrix1Size = nums.length * nums[0].length;
    var matrix2Size = r * c;
    return matrix1Size === matrix2Size;
};
var matrixReshape = function (nums, r, c) {
    if (!sameNumItems(nums, r, c))
        return nums;
    var flatMatrix = [].concat.apply([], nums);
    var newMatrix = [];
    while (flatMatrix.length > 0) {
        newMatrix.push(flatMatrix.splice(0, c));
    }
    return newMatrix;
};

/**
 * https://leetcode.com/problems/valid-parentheses/description/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 0) {return true}
    if (s.length % 2 == 1) {return false}
    
    let lastChar = []
    
    for (let i=0;i<s.length;i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                lastChar.push(s[i])
                break;
            case ')':
                if (lastChar.pop() != '(') {return false}
                break
            case ']':
                if (lastChar.pop() != '[') {return false}
                break
            case '}':
                if (lastChar.pop() != '{') {return false}
                break
        }
    }
    
    return lastChar.length == 0
};


/**
 * https://leetcode.com/problems/baseball-game/description/
 * @param {string[]} ops
 * @return {number}
 */
let calPoints = function(ops) {
    let a = [];
    ops.forEach((x) => {
         if (x === '+') {
             a.push(a[a.length - 2] + a[a.length - 1]);
         } else if (x === 'D') {
             a.push(a[a.length - 1] * 2);
         } else if (x === 'C') {
             a.pop();
         } else {
             a.push(parseInt(x));
         }
    });
    return a.reduce((s, x) => s + x, 0);
};

/**
 * https://leetcode.com/problems/simplify-path/description/
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path=path.split('/')
  let stack=[];
  for(var i=0; i<path.length; i++){
    let p = path[i];
    if(p==='..'){
      stack.pop();
    }
    else if(p!=='.' && p != ''){
     stack.push(path[i]) 
    }
  }
  return '/' + stack.join('/')  
};

/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = ['+', '-', '*', '/'];
    tokens.forEach(token => {
        if (operators.includes(token)) {
            // do the operation
            let r = stack.pop();
            let l = stack.pop();
            let result;
            switch(token) {
                case '+':
                    result = l + r;
                    break;
                case '-':
                    result = l - r;
                    break;
                case '*':
                    result = l * r;
                    break;
                case '/':
                    result = l / r;
                    break;
            }
            stack.push(parseInt(result));
        } else {
            stack.push(parseInt(token));
        }
    });
    return stack.pop();
};


/**
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length > 1)
    {
        let slow = nums[0];
        let fast = nums[nums[0]];
        while (slow != fast)
        {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        fast = 0;
        while (fast != slow)
        {
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
    return -1;
};

/**
 * https://leetcode.com/problems/set-mismatch/description/
 * 观察这个函数是怎么找到重复数字的
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var findErrorNums = function(nums) {
    const hash = Array(nums.length).fill(0)
    const res = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        const pos = nums[i] - 1
        sum += nums[i]
        if (hash[pos]) {
            res.push(nums[i])
        }
        hash[pos]++
    }
    const total = ((1 + nums.length) * nums.length / 2)
    res.push(res[0] + total - sum)
    return res
};


/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * @param  {[type]} root [description]
 * @return {[type]}      [description]
 */
var levelOrder = function(root) {
    const results = [];
    if (!root) return results;
    const getLayerValues = (nodes) => {
        const childs = [];
        const values = [];
        for (let i = 0; i < nodes.length; i += 1) {
            const node = nodes[i];
            values.push(node.val);
            if (node.left) childs.push(node.left);
            if (node.right) childs.push(node.right);
        }
        results.push(values);
        if (childs.length) getLayerValues(childs);
    };
    getLayerValues([root]);
    return results;
};

/**
 * [levelOrderBottom description]
 * @param  {[type]} root [description]
 * @return {[type]}      [description]
 */
var levelOrderBottom = function(root) {
    
    var result = [];
    
    traverse(root, 0);
    
    function traverse (node, level) {
        if (!node) return;
        
        if(result.length < level + 1) {
            result[level] = [node.val];
        } else {
            result[level].push(node.val);
        }

        if (node.left) {
            traverse(node.left, level + 1);
        }
        
        if (node.right) {
            traverse(node.right, level + 1);
        }
    }
    
    var reverse_result = [];
    
    for (var i=result.length - 1; i>=0; i--) {
        reverse_result.push(result[i]);
    }
    
    return reverse_result;
}

var levelOrderBottom = function(root) {
  var res = [];
  var count = 0;
  dfs(root, res, count);
  function dfs(root, res, count) {
    if (root == null) return;
    if (!res[count]) res[count] = [];
    res[count].push(root.val);
    count++;
    if (root.left) dfs(root.left, res, count);
    if (root.right) dfs(root.right, res, count);
  }
  return res.reverse();
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0];
    let majorityCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majority) {
            majorityCount++;
        } else {
            majorityCount--;
            if (majorityCount === 0) {
                majority = nums[i];
                majorityCount = 1;
            }
        }
    }
    return majority;
};

// public class Solution {
//     public int majorityElement(int[] num) {

//         int major=num[0], count = 1;
//         for(int i=1; i<num.length;i++){
//             if(count==0){
//                 count++;
//                 major=num[i];
//             }else if(major==num[i]){
//                 count++;
//             }else count--;
            
//         }
//         return major;
//     }
// }
// 
/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 * @param  {[type]} tree [description]
 * @return {[type]}      [description]
 */
function minDepth(tree) {
  if (tree === null) return 0;
  var left = minDepth(tree.left);
  var right = minDepth(tree.right);
  var min = Math.min(left, right) || Math.max(left, right);
  return min + 1;
}


var preorderTraversal = function traverse(root, result = []) {
  var stack = []
  while(true) {
    if (root) {
      stack.push(root)
      result.push(root.val)
      root = root.left
    } else {
      if (stack.length === 0) {
        break
      }
      root = stack.pop()
      root = root.right
    }
  }
  return result
}

/**
 * 有序数组转排序二叉树
 * @param  {[type]} ary   [description]
 * @param  {[type]} start [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
function sortedArray2BST(ary, start, end) {
    if(start > end) {
        return null
    }
//     var mid = parseInt((start + end) / 2)
    var mid = start + parseInt((end - start) / 2) //防止加法产生越界
    var node = {
        val: ary[mid],
        left: null,
        right: null
    }
    node.left = sortedArray2BST(ary, start, mid - 1)
    node.right = sortedArray2BST(ary, mid + 1, end)

    return node
}

function ary2bst(ary) {
    
    return sortedArray2BST(ary, 0, ary.length - 1)
}

/**
 * http://www.geeksforgeeks.org/print-left-view-binary-tree/
 * Input : 
                 1
               /   \
              2     3
             / \     \
            4   5     6             
 * Output : 1 2 4
 * 按层遍历，存储每层遍历到的第一个结点
 * @return {[type]} [description]
 */
function btLeftView(root) {
    var res = [],
        queue = [root]

    while(queue.length) {
        var len = queue.length
        for(let i = 0; i < len; i++) {
            var node = queue.shift()
            if(!i) {
                res.push(node.val)
            }

            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
            
        }
    }

    return res
}

/**
 * 是否是平衡二叉树
 * 平衡二叉树是一棵空树或它的左右两个子树的高度差的绝对值不超过1
 * 时间复杂度O(nlogn)
 * 最坏情况下时间复杂度为O(n ** 2)
 * @param  {[type]}  root [description]
 * @return {Boolean}      [description]
 */
function isBalanced(root) {
    if(!root) {
        return true
    }

    if(treeHeight(root.left) - treeHeight(root.right) > 1) {
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
}

/**
 * 判断是否平衡二叉树的优化版本
 * 
 * 时间复杂度为O(n) 
 * @param  {[type]}  root [description]
 * @return {Boolean}      [description]

The second method is based on DFS. Instead of calling depth() explicitly for each child node, we return the height of the current node in DFS recursion. When the sub tree of the current node (inclusive) is balanced, the function dfsHeight() returns a non-negative value as the height. Otherwise -1 is returned. According to the leftHeight and rightHeight of the two children, the parent node could check if the sub tree
is balanced, and decides its return value.
 */

class solution {
public:
int dfsHeight (TreeNode *root) {
        if (root == NULL) return 0;
        
        int leftHeight = dfsHeight (root -> left);
        if (leftHeight == -1) return -1;
        int rightHeight = dfsHeight (root -> right);
        if (rightHeight == -1) return -1;
        
        if (abs(leftHeight - rightHeight) > 1)  return -1;
        return max (leftHeight, rightHeight) + 1;
    }
    bool isBalanced(TreeNode *root) {
        return dfsHeight (root) != -1;
    }
};
// 
/**
 * leetcode网友的答案
 * @param  {[type]}  root [description]
 * @return {Boolean}      [description]
 */
var isBalanced = function(root) {
    if (root === null) return true;
    function check(node, d) {
        if (node === null) return d;
        var left = check(node.left, d + 1);
        var right = check(node.right, d + 1);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return Math.max(left, right);
    }
    return check(root, 0) !== -1;
};

/**
 * 一个结点到离它最远的叶子结点的距离为数据的高度
 * 按层遍历计算层次数
 * @return {[type]} [description]
 */
function treeHeight(root) {
    if(!root) {
        return 0
    }

    var height = 0,
        queue = [root]
    while(queue.length) {
        var len = queue.length
        height ++
        for(let i = 0; i < len; i++) {
            var node = queue.shift()
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }
    
    return height
}

/**
 * 计算树高度的递归写法
 * @param  {[type]} root [description]
 * @return {[type]}      [description]
 */
function treeHeight(root) {
    /*base case tree is empty*/
    if(!root) {
        return 0
    }

    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}

/**
 * 前序遍历二叉树，递归版本
 */
var preorderTraversal = function(root) {
    return preorder(root, [])
};

var preorder = function(root, res) {
    if(!root) {
        return res
    }
    
    res.push(root.val)
    preorder(root.left, res)
    preorder(root.right, res)
    
    return res
}


/**
 * Flatten Binary Tree to Linked List
 * @type {[type]}
 */
private TreeNode prev = null;

public void flatten(TreeNode root) {
    if (root == null)
        return;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
}

/**
 * 93. Restore IP Addresses
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 * backtracking recursive
 */
var restoreIpAddresses = function(s, parts = [], result = []) {
    if(parts.length === 3) {
        if(isIpPart(s)) {
            //去除前导0. 比如01等
            parts.push(s)
            result.push(parts.join("."))
            parts.pop()
        }
        return
    }
    
    for(var i = 1; i <= 3; i++) {
        var part = s.slice(0, i)
        if(isIpPart(part)) {
            parts.push(part)
            restoreIpAddresses(s.slice(i), parts, result)
            parts.pop()
        }
    }
    return result
};

var isIpPart = function(s) {
    //01 001
    if(s.length > 1 && s.charAt(0) == '0') {
        return false
    }
    return s.length && Number(s) < 256
}

/**
 * 39. combinationSum
 * @param  {[type]} candidates [description]
 * @param  {[type]} target     [description]
 * @return {[type]}            [description]
 */
var combinationSum = function(ary, parts = [], target) {
    for(var i = 0; i < ary.length i++) {
        parts.push(ary[i])
        if(sum(parts) === target) {
            console.log(parts.slice())
            parts.pop()
            continue
        }
        if(sum(parts) > target) {
            parts.pop()
            continue
        }

        combinationSum(ary.slice(i + 1), parts, target)
        parts.pop()
    }
}

var sum = function(ary) {
    return ary.reduce((a, b) =>  a + b, 0)
}






