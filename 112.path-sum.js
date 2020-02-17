/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    // console.dir({ root, sum });
    if (!root) return false;
    if (!root.left && !root.right) return root.val === sum;
    const l = hasPathSum(root.left, sum - root.val);
    const r = hasPathSum(root.right, sum - root.val);
    return l || r;
};
// @lc code=end

/*
Accepted
114/114 cases passed (68 ms)
Your runtime beats 55.75 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37 MB)
*/