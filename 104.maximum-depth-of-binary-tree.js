w/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root)
        return 0;
    const ltDep = maxDepth(root.left);
    const rtDep = maxDepth(root.right);
    return Math.max(ltDep, rtDep) + 1;
};
// @lc code=end

console.log(
    maxValue()
)

