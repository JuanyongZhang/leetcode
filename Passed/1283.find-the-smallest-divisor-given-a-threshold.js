/*
 * @lc app=leetcode id=1283 lang=javascript
 *
 * [1283] Find the Smallest Divisor Given a Threshold
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let l = 1, r = Math.max(...nums);

    const passed = (d) => {
        const sum = nums
            .map(n => Math.ceil(n / m))
            .reduce((p, v) => p += v, 0);
        return sum <= threshold;
    }

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (passed(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};
// @lc code=end
console.log((smallestDivisor(
    [1, 2, 5, 9], 6
)))
console.log((smallestDivisor(
    [2, 3, 5, 7, 11], 11
)))
console.log((smallestDivisor(
    [19], 5
)))

/*
Accepted
59/59 cases passed (124 ms)
Your runtime beats 15.38 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.5 MB)
*/
