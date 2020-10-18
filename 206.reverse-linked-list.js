/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;
    const q = [];
    let cur = head;
    let idx = 1;
    q.push(new ListNode(cur.val, null));
    // console.log({ q });

    while (cur.next) {
        cur = cur.next;
        q.push(new ListNode(cur.val, q[idx++ - 1]));
        // console.log({ q });
    }
    return q.pop();
};
// @lc code=end
/*
Accepted
Accepted
27/27 cases passed (108 ms)
Your runtime beats 10.91 % of javascript submissions
Your memory usage beats 22.43 % of javascript submissions (40.4 MB)
*/
