/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    if (!nums || nums.length === 0) return 0;
    const memo = {};
    memo['0'] = 1;
    let sum = 0, ans = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // if (k <= sum) {
        ans += memo[`${sum - k}`] || 0;
        // }
        memo[`${sum}`] = (memo[`${sum}`] || 0) + 1;
        // console.log({ sum, ans, memo });
    }
    return ans;
};
// @lc code=end
/*
[1, 1, 1] 2 
[1, 2, 3]

[1, 2, 5, 5, 7, 8] 7
[1, 3, 8,13,20,28]
*/
console.log(subarraySum([-1, -1, 1], 0));
console.log(subarraySum([1, 7, 2, 5, 7, 8], 7));
console.log(subarraySum([1, 1, 1], 2));

/*
Accepted
81/81 cases passed (120 ms)
Your runtime beats 62.24 % of javascript submissions
Your memory usage beats 5.44 % of javascript submissions (49.5 MB)
*/