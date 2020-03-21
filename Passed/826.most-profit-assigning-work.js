/*
 * @lc app=leetcode id=826 lang=javascript
 *
 * [826] Most Profit Assigning Work
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment2 = function (difficulty, profit, worker) {
    const jobMap = new Map();
    for (let i = 0; i < difficulty.length; i++) {
        const d = difficulty[i];
        const p = Math.max(profit[i], jobMap.get(d) || -Infinity);
        jobMap.set(d, p);
    }
    let max = 0;
    const jobs = [...jobMap.entries()];
    for (let w of worker) {
        const j = jobs.filter(([d, p]) => d <= w).sort(([d1, p1], [d2, p2]) => p2 - p1);
        if (j.length > 0) max += j[0][1];
    }
    return max
};


var maxProfitAssignment = function (difficulty, profit, worker) {
    const N = 10 ** 5;
    const maxProfit = Array(N + 1).fill(0);
    for (let i = 0; i < difficulty.length; i++) {
        maxProfit[difficulty[i]] = Math.max(profit[i], maxProfit[difficulty[i]]);
    }
    for (let i = 2; i < maxProfit.length; i++) {
        maxProfit[i] = Math.max(maxProfit[i], maxProfit[i - 1]);
    }
    let ans = 0;
    for (const w of worker) {
        ans += maxProfit[w];
    }
    return ans;
};


// @lc code=end

console.log(maxProfitAssignment(
    [85, 47, 57],
    [24, 66, 99],
    [40, 25, 25],
))
console.log(maxProfitAssignment(
    [13, 37, 58],
    [4, 90, 96],
    [34, 73, 45]
))
console.log(maxProfitAssignment(
    [2, 4, 6, 8, 10],
    [10, 20, 30, 40, 50],
    [4, 5, 6, 7]
))

/*
Accepted
57/57 cases passed (120 ms)
Your runtime beats 95.83 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (84.2 MB)
*/