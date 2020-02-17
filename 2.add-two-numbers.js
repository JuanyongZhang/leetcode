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
var numberify = function (input) {
    if (!input || input.length == 0)
        return 0
    let num = 0n;
    let pow = 0;
    let cur = input;
    while (true) {
        num += BigInt(cur.val * 10 ** pow++);
        cur = cur.next;
        if (!cur)
            break;
    }
    console.log({ num });
    return num;
}

var addTwoNumbers = function (l1, l2) {
    const n1 = numberify(l1);
    const n2 = numberify(l2);
    const sum = n1 + n2;
    console.log({ sum });
    const nums = Array.from(String(sum), Number);
    let root = new ListNode(nums.pop());
    let cur = root;
    while (nums.length > 0) {
        cur.next = new ListNode(nums.pop());
        cur = cur.next;
    }
    return root;
};

// @lc code=end
/*
addTwoNumbers
Wrong Answer
1560/1563 cases passed (N/A)
Testcase
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]
Answer
[2,2,1,9,3,8,4,2,6,4,8,8,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
Expected Answer
[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
Stdout
{ num: 1000000000000000019884624838657n }
{ num: 465n }
{ sum: 1000000000000000019884624839122n }
*/