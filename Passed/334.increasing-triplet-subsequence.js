/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;
    let min1 = Infinity, min2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > min2) return true;
        else if(num<min1)min1=num;
        else if(num > min1 && num < min2)min2=num;
    }

    return false;
};
// @lc code=end
console.log(increasingTriplet(
    [1, 2, 3, 1, 2, 1]
))
console.log(increasingTriplet(
    [2, 1, 5, 0, 0, 3]
))
console.log(increasingTriplet(
    [5, 4, 3, 2, 1]
))

/*
Accepted
62/62 cases passed (52 ms)
Your runtime beats 92.22 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (34.6 MB)
*/