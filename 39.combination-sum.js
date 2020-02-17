/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
const permutation = (arr, d, n, used, curr, ans) => {
    if (d === n) {
        ans.push(curr);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (used[i])
            continue;
        used[i] = true;
        curr.push(arr[i]);
        permutation(arr, d + 1, n, curr, ans);
        curr.pop();
        used[i] = false;
    }
}
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    return permutation(candidates, 0, 3, [false, false, false], [], [])
};


// @lc code=end

console.log(combinationSum(
    [2, 3, 6, 7], 7
))