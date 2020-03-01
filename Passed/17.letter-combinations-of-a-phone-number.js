/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const dialPad = [];
dialPad[0] = [' '];
dialPad[1] = [];
dialPad[2] = ['a', 'b', 'c',];
dialPad[3] = ['d', 'e', 'f',];
dialPad[4] = ['g', 'h', 'i',];
dialPad[5] = ['j', 'k', 'l',];
dialPad[6] = ['m', 'n', 'o',];
dialPad[7] = ['p', 'q', 'r', 's',];
dialPad[8] = ['t', 'u', 'v',];
dialPad[9] = ['w', 'x', 'y', 'z'];


//combianation
var letterCombinations = function (digits) {
    if (!digits) return []

    const dfs = (nums, dialPad, idx, cur, ans) => {
        if (idx === nums.length) {
            if (cur.length > 0)
                ans.push(cur.join(''));
            return;
        }
        const options = dialPad[nums[idx]];
        for (const c of options) {
            cur.push(c);
            dfs(nums, dialPad, idx + 1, cur, ans);
            cur.pop();
        }
    }
    let cur = []
    const ans = [];
    dfs(digits.split('').map(Number).filter(Boolean), dialPad, 0, cur, ans);
    return ans;
};

// @lc code=end


console.dir(letterCombinations(
    '247'
))
// console.dir(letterCombinations(
//     '234aa2'
// ))

/*
Accepted
25/25 cases passed (56 ms)
Your runtime beats 53.93 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (33.8 MB)
*/