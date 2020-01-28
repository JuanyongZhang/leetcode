/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const numberify = (input) => {
    if (!input || input.length == 0)
        return 0
    let v = input.val;
    const arr = [];
    while (!!v) {
        arr.push(v);
        v = input.next;
    }
    return arr.reduce((p, c, i) => {
        return p + c * Math.pow(10, i);
    })
}

var addTwoNumbers = function (l1, l2) {
    const n1 = numberify(l1);
    const n2 = numberify(l2);
    const sum = n1 + n2;
    return (sum + '').split('').reverse().join(' -> ');
};

const output = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log(output);
// @lc code=end

