/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root)
        return 0;
    if (!root.left && !root.right)
        return 1;
    let ltDep = minDepth(root.left);
    let rtDep = minDepth(root.right);
    if (!root.left)
        return 1 + ltDep
    if (!root.right)
        return 1 + rtDep
    return Math.min(ltDep, rtDep) + 1
};
// @lc code=end



