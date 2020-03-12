/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    const robLast = nums.slice(1);
    const robFirst = nums.slice(0, nums.length - 1);
    const dp = (arr, i, memo) => {
        if (i < 0) return 0;
        if (memo.has(i)) return memo.get(i);
        const max = Math.max(
            arr[i] + dp(arr, i - 2, memo),
            dp(arr, i - 1, memo)
        );
        memo.set(i, max);
        return max;
    }
    return Math.max(
        dp(robLast, robLast.length - 1, new Map()),
        dp(robFirst, robFirst.length - 1, new Map()),
    );
};
// @lc code=end

console.log(rob(
    [1, 2, 3, 1]
))
console.log(rob(
    [2, 3, 2]
))

/*
Accepted
74/74 cases passed (48 ms)
Your runtime beats 94.26 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (33.9 MB)
*/