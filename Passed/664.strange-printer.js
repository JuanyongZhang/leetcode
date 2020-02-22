/*
 * @lc app=leetcode id=664 lang=javascript
 *
 * [664] Strange Printer
 */
const utils = require('../collections/utils') 
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const createMultiDimensionalArray = (dims) => {
    let str = 'return ', l = dims.length;
    dims.forEach((v, i) => {
        str += i < l - 1 ?
            `Array(${v}).fill().map(a => `
            : `Array(${v}` + ')'.repeat(l);
    });
    // console.log(str);
    return Function(str)();
}
var strangePrinter = function (s) {
    if (!s || s.length === 0) return 0;
    const chars = s.split('');
    const len = chars.length;
    const memo = createMultiDimensionalArray([len, len])
    const type = (start, end) => {
        // if (start < 0 || end > len - 1) return 0;
        if (start > end) return 0;
        if (start === end) return 1;
        // console.log(memo[start, end])
        if (!!memo[start][end])
            return memo[start][end];

        //wrost answer
        let ans = type(start, end - 1) + 1;
        for (let i = start; i < end; i++) {
            if (chars[i] === chars[end]) {
                ans = Math.min(ans, type(start, i) + type(i + 1, end - 1));
                memo[start][end] = ans;
            }
        }
        return ans;
    }
    return type(0, chars.length - 1)
};
// @lc code=end

console.log(strangePrinter(
    'abcabcabc'
))

/*
Accepted
201/201 cases passed (104 ms)
Your runtime beats 81.82 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.5 MB) */