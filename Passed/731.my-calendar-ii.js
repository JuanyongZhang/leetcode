/*
 * @lc app=leetcode id=731 lang=javascript
 *
 * [731] My Calendar II
 */

// @lc code=start

var MyCalendarTwo = function () {
    this.booking = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
    this.booking.set(start, (this.booking.get(start) || 0) + 1);
    this.booking.set(end, (this.booking.get(end) || 0) - 1);
    let cur = 0;
    const keys = [...this.booking.keys()].sort((a, b) => a - b);
    // console.log(this.booking.entries());
    for (const key of keys) {
        cur += this.booking.get(key);
        if (cur > 2) {
            this.booking.set(start, (this.booking.get(start) || 0) - 1);
            this.booking.set(end, (this.booking.get(end) || 0) + 1);
            return false;
        }
    }
    return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
const cal = new MyCalendarTwo();
console.log(cal.book(10, 20)); // returns true
console.log(cal.book(50, 60)); // returns true
console.log(cal.book(10, 40)); // returns true
console.log(cal.book(5, 15)); // returns false
console.log(cal.book(5, 10)); // returns true
console.log(cal.book(25, 55)); // returns true

/*
Accepted
98/98 cases passed (4580 ms)
Your runtime beats 5.26 % of javascript submissions
Your memory usage beats 5.26 % of javascript subm
*/
