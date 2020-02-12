/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    fromArray(arr) {
        arr.forEach(e => {
            this.addAtTail(new Node(e));
        });
    }

    toArray() {
        let cur = this.head;
        const arr = [cur.val];
        while (true) {
            cur = cur.next;
            if (!cur) break;
            arr.push(cur.val);
        }
        return arr;
    }
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
     * @param {number} index
     * @return {number}
     */
    _indexOf(index) {
        if (index < 0 || index > this.length - 1) return null;
        let n = this.head;
        while (index-- > 0) {
            n = n.next;
        }
        return n;
    };

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const n = this._indexOf(index);
        return !n ? -1 : n.val;
    };

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const head = new Node(val);
        if (this.length === 0) {
            this.head = this.tail = head
        } else {
            head.next = this.head;
            this.head = head;
        }
        this.length++;
    };

    /**
     * Append a node of value val to the last element of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const tail = new Node(val);
        if (this.length === 0) {
            this.head = this.tail = tail
        } else {
            this.tail.next = tail;
            this.tail = tail;
        }
        this.length++;
    };

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val);
        } else if (index === this.length) {
            this.addAtTail(val);
        } else if (index > 0 && index < this.length) {
            const l = this._indexOf(index - 1);
            const r = l.next;
            const i = new Node(val);
            l.next = i;
            i.next = r;
            this.length++;
        }
    };

    /**
     * Delete the index-th node in the linked list, if the index is valid. 
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index > this.length - 1) return;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else if (index === 0) {
            this.head = this.head.next;
        } else if (index === this.length - 1) {
            const tail = this._indexOf(this.length - 2);
            tail.next = null;
            this.tail = tail;
        } else {
            const l = this._indexOf(index - 1);
            l.next = l.next.next;
        }
        this.length--;
    };
}


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

const linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtHead(5);
// linkedList.addAtTail(3);
// linkedList.addAtTail(7);

// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// console.dir(linkedList.toArray());
// linkedList.deleteAtIndex(3);  // now the linked list is 1->3
// console.dir(linkedList.toArray());

// console.log(linkedList.get(1));            // returns 3

linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
console.dir(linkedList.toArray());           // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
console.dir(linkedList.toArray());       // returns 3

const l2 = new MyLinkedList();
l2.fromArray([2,3,5,6,1,32,1]);
console.dir(l2.toArray().map(n=>n.val));

/**
 * Accepted
57/57 cases passed (112 ms)
Your runtime beats 94.7 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (41.9 MB)
 */
