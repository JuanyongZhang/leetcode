/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */
// const _ = require('lodash');
// @lc code=start
/**
 * initialize your data structure here.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function createBST(values) {
    let root;
    for (v of values) {
        root = insert(root, v);
    }
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

const inorder = (root, callback) => {
    if (!root)
        return;
    inorder(root.left, callback);
    // arr.push(root.value);
    callback(root);
    inorder(root.right, callback);
}


class MedianFinder {
    constructor() {
        this.bst = null;
    }
    addNum(num) {
        this.bst = insert(this.bst, num);
    }

    findMedian() {
        const arr = [];
        inorder(this.bst, it => arr.push(it.value));
        // console.dir(arr);
        const len = arr.length;
        if (len === 0)
            return null
        if (len === 1)
            return arr[0]
        const n = Math.floor(len / 2);
        if (len % 2 === 0) {
            return (arr[n - 1] + arr[n]) / 2
        } else {
            return arr[n]
        }
    };
}
// var MedianFinder = function () {
//     this.bst = null;
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//     this.bst = insert(this.bst, num);
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//     const arr = [];
//     inorder(this.bst, it => arr.push(it.value));
//     // console.dir(arr);
//     const len = arr.length;
//     if (len === 0)
//         return null
//     if (len === 1)
//         return arr[0]
//     const n = Math.floor(len / 2);
//     if (len % 2 === 0) {
//         return (arr[n - 1] + arr[n]) / 2
//     } else {
//         return arr[n]
//     }
// };

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
const mf = new MedianFinder();

mf.addNum(2);
mf.addNum(1);
console.log(mf.findMedian());
mf.addNum(7);
mf.addNum(3);

console.log(mf.findMedian());

