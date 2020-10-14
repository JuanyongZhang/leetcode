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
    // const sum = nums.reduce((p, v) => p + v, 0);
    let l = 1;
    let r = Math.max(...nums);
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        const sum = nums.reduce((tot, val) => tot + Math.ceil(val / m), 0);
        if (sum <= threshold)
            r = m;
        else
            l = m + 1;
    }
    return l;
};
// @lc code=end

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([2, 3, 5, 7, 11], 11));
console.log(smallestDivisor([19], 5));

/*
Accepted
59/59 cases passed (120 ms)
Your runtime beats 28.41 % of javascript submissions
Your memory usage beats 14.77 % of javascript submissions (42.1 MB)
*/