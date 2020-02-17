w/*
 * @lc app=leetcode id=104 lang=javascript
 *function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
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
/*
Accepted
39/39 cases passed (64 ms)
Your runtime beats 62.36 % of javascript submissions
Your memory usage beats 28.13 % of javascript submissions (37.2 MB) */

