/*
 * @lc app=leetcode id=341 lang=javascript
 *
 * [341] Flatten Nested List Iterator
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.list = [];
    const getNestedItems = (input) => {
        if (Array.isArray(input)) {
            return input.flatMap(it => getNestedItems(it));
        } else {
            return [input];
        }
    };
    for (const it of nestedList) {
        const items = getNestedItems(it);
        this.list = [...this.list, ...items];
    }
    this.cursor = 0;
    console.log(this.list);

};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.cursor < this.list.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.list[this.cursor++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end
const nestedItr = new NestedIterator([[1, 1], 2, [1, 1]]);
console.log(nestedItr.next());
console.log(nestedItr.next());
console.log(nestedItr.next());
console.log(nestedItr.next());
console.log(nestedItr.next());
console.log(nestedItr.next());