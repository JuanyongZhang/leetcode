/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBrute = function (nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            max = Math.max(
                max,
                nums.slice(i, j).reduce((s, v) => s += v, 0)
            );
        }
    }
    return max;
};

var maxSubArrayDP = function (nums) {
    const memo = new Map();
    const dp = (l, r) => {
        const key = `${l}_${r}`;
        if (memo.has(key)) return memo.get(key);
        if (l >= r) return -Infinity;
        const max = Math.max(
            dp(l + 1, r),
            dp(l, r - 1),
            nums.slice(l, r).reduce((s, v) => s += v, 0)
        );
        memo.set(key, max);
        return max;
    };
    return dp(0, nums.length);
};
//nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//f:    [-2, 1, -2, 4,  3, 5, 6,  1, 5]
var maxSubArray = function (nums) {
    let max = nums[0];
    const f = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        f[i] = f[i - 1] > 0 ? nums[i] + f[i - 1] : nums[i];
        max = Math.max(max, f[i]);
    }
    return max;
};
// @lc code=end
console.log(maxSubArrayDP(
    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
));
console.log(maxSubArrayDP(
    [-1]
));
console.log(maxSubArray(
    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
));
console.log(maxSubArray(
    [-1]
));
console.log(maxSubArray(
    [-2, -1]
));
/*
Accepted
202/202 cases passed (60 ms)
Your runtime beats 70.7 % of javascript submissions
Your memory usage beats 7.41 % of javascript submissions (36.1 MB)
*/