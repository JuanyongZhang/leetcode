/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    if (asteroids.length <= 1) return asteroids;
    const q = [];
    for (let i = 0; i < asteroids.length; i++) {
        const next = asteroids[i];
        if (q.length === 0 || next > 0) {
            q.push(next);
        } else {
            const last = q[q.length - 1]
            if (last < 0) {
                q.push(next);
            } else if (Math.abs(last) < Math.abs(next)) {
                i--;
                q.pop();
            } else if (last + next === 0) {
                q.pop();
            }
        }
    }
    return q;
};
// @lc code=end

console.log(asteroidCollision(
    [8, -8]
))
console.log(asteroidCollision(
    [1, -2, -2, -2]
))
console.log(asteroidCollision(
    [5, 10, -5]
))
console.log(asteroidCollision(
    [10, 2, -5]
))
console.log(asteroidCollision(
    [-2, -1, 1, 2, 5, 6, -7]
))

/*
Accepted
275/275 cases passed (64 ms)
Your runtime beats 88.37 % of javascript submissions
Your memory usage beats 87.5 % of javascript submissions (36 MB)
*/