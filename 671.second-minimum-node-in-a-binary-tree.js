/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
    const nodes = [];

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        nodes.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    // console.log({ nodes });
    nodes.sort((a, b) => a - b);
    let ans = nodes.shift();
    let hasSecSmall = false;
    while (nodes.length > 0) {
        const cur = nodes.shift()
        if (ans < cur) {
            ans = cur;
            hasSecSmall = true;
            break;
        }
    }

    return hasSecSmall ? ans : -1;
};
// @lc code=end

/*
Accepted
35/35 cases passed (52 ms)
Your runtime beats 77.71 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (33.8 MB)
*/