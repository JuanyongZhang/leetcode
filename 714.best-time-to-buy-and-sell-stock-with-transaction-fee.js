/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let cash = 0;
    let hold = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};
// @lc code=end

const prices = [1, 3, 2, 8, 4, 9], fee = 2;
const max = maxProfit(prices, fee);
console.log({ max });

/*



[1, 3, 2, 8, 8, 4, 9]
[H, H, H, S, R, H, S]

[1, 3, 2, 8, 4, 9]
[B, H, H, S, B, S]
ANS = MAX(H[i]-PX[i], )

MAX = PX[I]+HOLD[I-1]-2


*/