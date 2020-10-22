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
    return indices.join('').split('0').filter(Boolean).length;
};
// @lc code=end

console.log(
    [0, 1, 1, 1, 0, 1, 0].join('').split('0').filter(Boolean).length
)

/*

0->1->2->3
1->1->0->1

0->1->2->3->4
1->1->0->1->1

Accepted
57/57 cases passed (236 ms)
Your runtime beats 16.36 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.5 MB)
*/