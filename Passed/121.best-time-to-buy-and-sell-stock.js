/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBrute = function (prices) {
    let max = 0;
    for (let b = 0; b < prices.length - 1; b++) {
        for (let s = b + 1; s < prices.length; s++) {
            max = Math.max(max, prices[s] - prices[b]);
        }
    }
    return max;
};


//Prices: [7,1,5,3,6,4]
//Lowest: [7,1,1,1,1,1]
var maxProfit = function (prices) {
    const lo = [prices[0]];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        lo[i] = Math.min(prices[i], lo[i - 1]);
        max = Math.max(prices[i] - lo[i], max);
    }
    // console.log({ lo });
    return max;
};
// @lc code=end

console.log(maxProfit(
    [7, 1, 5, 3, 6, 4]
))
console.log(maxProfit(
    [7, 6, 4, 3, 1]
))


/*
Accepted
200/200 cases passed (44 ms)
Your runtime beats 99.79 % of javascript submissions
Your memory usage beats 7.41 % of javascript submissions (36.6 MB)
*/