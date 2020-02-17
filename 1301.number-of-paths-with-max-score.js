/*
 * @lc app=leetcode id=1301 lang=javascript
 *
 * [1301] Number of Paths with Max Score
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function (input) {
    const board = input.map(s => s.split(''));
    const MOD = Math.pow(10, 9) + 7;
    const n = board.length;
    board[n - 1][n - 1] = board[0][0] = '0';
    const count = [...Array(n)].map(x=>Array(n).fill(0));
    // console.log({ count })
    const dpMaxScore = (i, j) => {
        if (i < 0 || j < 0)
            return 0;
        const c = Number.parseInt(board[i][j]);
        if (isNaN(c))
            return 0;
        const max = Math.max(
            dpMaxScore(i - 1, j) + c,
            dpMaxScore(i - 1, j - 1) + c,
            dpMaxScore(i, j - 1) + c,
        )
        return max;
    }
    const dpPathCount = (i, j) => {
        return 0;
    }

    const maxScore = dpMaxScore(n - 1, n - 1);
    const pathCount = dpPathCount(n - 1, n - 1);
    return [maxScore, pathCount];
};
// @lc code=end
console.log(pathsWithMaxScore(
    ["E23", "2X2", "12S"]
))
/**
E23
2X2
12S
 */