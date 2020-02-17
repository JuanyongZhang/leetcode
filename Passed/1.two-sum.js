/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums || nums.length < 2)
        return [];
    let pairs = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const a = nums[i];
        const b = target - a;
        const j = nums.lastIndexOf(b)
        if (j > i) {
            return [i, j];
        }
    }
    return pairs
};

const output = twoSum([3, 3], 6)
console.dir(output)
// @lc code=end
/*
twoSum
Accepted
29/29 cases passed (140 ms)
Your runtime beats 26.12 % of javascript submissions
Your memory usage beats 83.06 % of javascript submissions (34.5 MB)
