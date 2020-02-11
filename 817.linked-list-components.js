/*
 * @lc app=leetcode id=817 lang=javascript
 *
 * [817] Linked List Components
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
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
    // console.log({ head, G });
    const indices = [];
    while (!!head) {
        const { val } = head;
        indices.push(G.indexOf(val) === -1 ? 0 : 1);
        head = head.next;
    }
    // console.log({ indices });
    return indices.join('').split('0').filter(Boolean).length
};
// @lc code=end

console.log(
    [0, 1, 1, 1, 0, 1, 0].join('').split('0').filter(Boolean).length
)