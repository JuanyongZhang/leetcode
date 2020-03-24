/*
 * @lc app=leetcode id=732 lang=javascript
 *
 * [732] My Calendar III
 */

// @lc code=start

var MyCalendarThree = function () {
    this.max = 0;
    // this.bookings = [];
    this.bookings = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */

MyCalendarThree.prototype.bookTLE = function (start, end) {
    for (let i = start; i < end; i++) {
        const v = (this.bookings.get(i) || 0) + 1;
        this.bookings.set(i, v);
        this.max = Math.max(this.max, v);
    }
    return this.max;
};
MyCalendarThree.prototype.book = function (start, end) {
    this.bookings.set(start, (this.bookings.get(start) || 0) + 1);
    this.bookings.set(end, (this.bookings.get(end) || 0) - 1);
    let cur = 0;
    const keys = [...this.bookings.keys()].sort((a, b) => a - b);
    for (const key of keys) {
        cur += this.bookings.get(key);
        this.max = Math.max(this.max, cur);
    }
    return this.max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

const cal = new MyCalendarThree();
// console.log(cal.book(10, 20)); // returns 1
// console.log(cal.book(50, 60)); // returns 1
// console.log(cal.book(10, 40)); // returns 2
// console.log(cal.book(5, 15)); // returns 3
// console.log(cal.book(5, 10)); // returns 3
// console.log(cal.book(25, 55)); // returns 3


console.log(cal.book(24, 40));
console.log(cal.book(43, 50));
console.log(cal.book(27, 43));
console.log(cal.book(5, 21));
console.log(cal.book(30, 40));
console.log(cal.book(14, 29));
console.log(cal.book(3, 19));
console.log(cal.book(3, 14));
console.log(cal.book(25, 39));
console.log(cal.book(6, 1));
//[null,1,1,2,2,3,3,3,3,4,4]

/*
Accepted
98/98 cases passed (892 ms)
Your runtime beats 60 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (42.9 MB)
*/