/*
 * @lc app=leetcode id=1310 lang=javascript
 *
 * [1310] XOR Queries of a Subarray
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    return queries.map(([l, r]) => {
        return arr.slice(l, r + 1).reduce((p, c) => {
            return p ^ c;
        }, 0);
    });
};
// @lc code=end
console.log(xorQueries(
    [1, 3, 4, 8],
    [[0, 1], [1, 2], [0, 3], [3, 3]]
));
/*
Accepted
42/42 cases passed (1412 ms)
Your runtime beats 10.38 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (48.9 MB)
*/