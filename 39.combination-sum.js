/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    return permutation(candidates, 0, 3, [false, false, false], [], [])
};

const permutation = (arr, d, n, used, curr, ans) => {
    if (d === n) {
        ans.push(curr)
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (used[i])
            continue;
        used[i] = true;
        curr.push(arr[i]);
        permutation(arr, d + 1, n, used, curr, ans);
        curr.pop();
        used[i] = false;
    }
}

// @lc code=end
let arr = [2, 3, 6, 7];
let ans = [];
permutation(
    arr, 0, 3, Array(arr.length).fill(false), [], ans
)
console.log(ans)