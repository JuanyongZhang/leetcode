/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i > j || j > this.nums.length) return undefined;
    return this.nums.slice(i, j + 1).reduce((p, v) => p += v, 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArr.sumRange(0, 2));
console.log(numArr.sumRange(2, 5));
console.log(numArr.sumRange(0, 5));

/*
Time Limit Exceeded
16/16 cases passed (N/A)
*/