/*
 * @lc app=leetcode id=773 lang=javascript
 *
 * [773] Sliding Puzzle
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    const target = '123450';
    const start = board.flatMap(it => it).reduce((p, v) => p += v, '');
    console.log({ target, start });
    if (start === target) return 0;
    const moves = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4],
    ];
    
};
// @lc code=end

console.log(slidingPuzzle([
    [1, 2, 3],
    [4, 0, 5]
]));
console.log(slidingPuzzle([
    [1, 2, 3],
    [5, 4, 0]
]));
console.log(slidingPuzzle([
    [4, 1, 2],
    [5, 0, 3]
]));