/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideViewCheat = function (root) {
    const ans = [];
    let i = 0;
    while (root.length > 0) {
        const rt = root.splice(0, 2 ** i++).filter(it => !!it).pop();
        ans.push(rt);
    }
    return ans;
};

var rightSideView = function (root) {
    const memo = new Map();
    const travese = (lv, node) => {
        if (!node) return;
        memo.set(lv, node.val);
        if (node.left) travese(lv + 1, node.left);
        if (node.right) travese(lv + 1, node.right);
    };
    travese(0, root);
    return Array.from(memo.values());
};
// @lc code=end
console.log(rightSideView([1, 2, 3, null, 5, 4, null]));
//                        [0, 1, 2, 3   , 4, 5,  , 6]
//[0,1],[1,3],[3, 7]
/*
Accepted
211/211 cases passed (76 ms)
Your runtime beats 91.54 % of javascript submissions
Your memory usage beats 8.3 % of javascript submissions (40 MB)
*/