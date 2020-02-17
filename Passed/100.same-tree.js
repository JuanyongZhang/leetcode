/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // console.dir({ p, q })
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    let l = isSameTree(p.left, q.left);
    let r = isSameTree(p.right, q.right);
    return p.val === q.val && l && r;
};
// @lc code=end

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

const TREE_TYPE = {
    BST: 0, BALANCED: 1
}

function createBinaryTree(values, model = TREE_TYPE.BST) {
    let root;
    values.forEach((v, i) => {
        if (model === TREE_TYPE.BST) {
            root = insert(root, v);
        } else {
            root = insert(root, v);
        }
    })
    return root;
}

function insert(root, value) {
    if (!root)
        return new TreeNode(value);
    if (value <= root.value)
        root.left = insert(root.left, value);
    else
        root.right = insert(root.right, value);
    return root;
}


const p = createBinaryTree(
    [1, 2, 1],
    TREE_TYPE.BST
);
const q = createBinaryTree(
    [1, 1, 2],
    TREE_TYPE.BST
);
console.dir({ p, q });
console.log(isSameTree(p, q));


/*
isSameTree
57/57 cases passed (44 ms)
Your runtime beats 98.61 % of javascript submissions
Your memory usage beats 93.33 % of javascript submissions (33.7 MB)
*/