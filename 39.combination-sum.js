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
    const ans = [];
    const cur = [];

    const dfs = (nums, target, idx) => {
        if (target === 0) {
            ans.push([...cur]);
            return;
        }
        for (let i = idx; i < nums.length; i++) {
            const num = nums[i];
            if (num > target)
                return;
            cur.push(num);
            dfs(nums, target - num, i);
            cur.pop();
        }
    }

    dfs(candidates.sort((a, b) => a - b), target, 0);
    return ans;
};
// @lc code=end

console.log(combinationSum(
    [8, 7, 4, 3], 11
))
console.log(combinationSum(
    [2, 3, 5], 8
))

/*
Accepted
168/168 cases passed (68 ms)
Your runtime beats 92.2 % of javascript submissions
Your memory usage beats 66.67 % of javascript submissions (36.8 MB)
*/