/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const findPath = (node, tar, path) => {
        if (!node) return;
        path.push(node);
        console.log({ node: node.val, tar: tar.val, path });
        if (node.val === tar.val) {
            console.log('found!!', path);
            return path;
        }
        findPath(node.left, tar, path);
        findPath(node.right, tar, path);
        path.pop();
        return path;
    };

    const pathP = findPath(root, p, []);
    const pathQ = findPath(root, q, []);

    const range = Math.min(pathP.length, pathQ.length);
    if (range === 1) return pathP[0];
    for (let i = 1; i < range; i++) {
        if (pathP[i] !== pathQ[i]) return pathP[i - 1];
    }
    return root;

};
// @lc code=end

// console.log()
/*
[3,5,1,6,2,0,8,null,null,7,4]\n5\n4
*/
// const q = [];
// [3,5,1,6,2,0,8,null,null,7,4].forEach(it=>q.push(it));
// console.log(q);
// q.pop();
// q.pop();
// console.log(q);
