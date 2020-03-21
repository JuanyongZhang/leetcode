/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    const len = nums.length;
    const ans = [];
    const dp = new Map();
    const past = [];
    const lis = (arr) => {
        if (!arr || arr.length === 0) return 0;
        const n = arr.length;
        if (n === 1) return 1;
        if (n === 2) return arr[0] < arr[1] ? 2 : 1;
        for (let i = 0; i < n; i++) {
            console.log(arr.slice(0, i + 1));
            past.push(lis(arr.slice(0, i + 1)));
        }
        return (arr[n - 2] < arr[n - 1] ? 1 : 0) + Math.max(...past)
    }
    return lis(nums);
};
// @lc code=end

console.log(findNumberOfLIS(
    [1, 3, 5, 4, 7]
))
console.log(findNumberOfLIS(
    [2, 2, 2, 2, 2]
))

