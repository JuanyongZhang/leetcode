/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const memo = new Map();
    const dp = n => {
        if (memo.has(n)) return memo.get(n);
        if (n <= 1) return 0;
        //dp(n) - min cost to climb to n-th step
        memo.set(n, Math.min(cost[n - 1] + dp(n - 1), cost[n - 2] + dp(n - 2)));
        return memo.get(n)
    }
    return dp(cost.length);
};
// @lc code=end

console.log(minCostClimbingStairs(
    [10, 15, 20]
))

console.log(minCostClimbingStairs(
    [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
))
/*
Accepted
276/276 cases passed (60 ms)
Your runtime beats 76.26 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (36 MB)
*/
