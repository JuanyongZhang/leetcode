/*
 * @lc app=leetcode id=23 lang=javascript
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let ls = [...lists].filter(Boolean);
    if (!ls || ls.length === 0) return null;
    if (ls.length === 1) return ls[0];
    if (!ls || ls.length === 0 || !ls[0]) {
        return null;
    }
    ls.sort((a, b) => a.val - b.val);
    let min = ls.shift();
    let root = new ListNode(min.val);
    let cur = root;
    if (!!min.next) {
        ls.push(min.next);
    }
    while (ls.length > 1) {
        ls.sort((a, b) => a.val - b.val);
        min = ls.shift();//ls>0
        cur.next = new ListNode(min.val);
        cur = cur.next;
        if (!!min.next) {
            ls.push(min.next);
        }
    }
    cur.next = ls.shift();
    return root;
};
// @lc code=end
/*
mergeKLists
Accepted
131/131 cases passed (2700 ms)
Your runtime beats 5.01 % of javascript submissions
Your memory usage beats 5.41 % of javascript submissions (43.2 MB)
*/