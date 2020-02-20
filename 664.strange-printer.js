/*
 * @lc app=leetcode id=664 lang=javascript
 *
 * [664] Strange Printer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
    const memo = [...Array(5)].fill(Array(10).fill(-1));
    console.dir(memo[1][2])
};
// @lc code=end

console.log(strangePrinter(
    3
))