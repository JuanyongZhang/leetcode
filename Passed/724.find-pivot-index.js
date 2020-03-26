/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex2 = function (nums) {
    const lt = Array(nums.length).fill(0),
        rt = Array(nums.length).fill(0)
    lt[0] = nums[0]
    rt[nums.length - 1] = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        lt[i] = nums[i] + lt[i - 1];
    }
    for (let i = nums.length - 2; i > -1; i--) {
        rt[i] = nums[i] + rt[i + 1];
    }
    // console.log({ lt, rt });
    let ans = -1;
    for (let i = 0; i < nums.length; i++) {
        if (lt[i - 1] === rt[i + 1] || lt[i] === rt[i]) { ans = i; break; }
    }
    return ans;
};
var pivotIndex = function (nums) {
    let sum = nums.reduce((p, v) => p += v, 0);
    let lt = 0;
    // console.log({ lt, rt });
    let ans = -1;
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
        if (lt === sum) {
            ans = i; break;
        }
        lt += nums[i];
    }
    return ans;
};
// @lc code=end

console.log(pivotIndex(
    [-1, -1, -1, 0, 1, 1].reverse()
))
console.log(pivotIndex(
    [-1, -1, -1, 0, 1, 1]
))
console.log(pivotIndex(
    [1, 7, 3, 6, 5, 6]
))
console.log(pivotIndex(
    [1, 2, 3]
))

console.log(pivotIndex(
    [0, 2]
))
console.log(pivotIndex(
    [1]
))

console.log(pivotIndex(
    []
))

/*
Accepted
741/741 cases passed (72 ms)
Your runtime beats 83.33 % of javascript submissions
Your memory usage beats 62.5 % of javascript submissions (38.6 MB)


Accepted
741/741 cases passed (68 ms)
Your runtime beats 93.08 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.5 MB)
*/