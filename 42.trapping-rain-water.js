/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
    const len = h.length;
    if (len < 3)
        return 0;
    let forward = 0;
    let lt = 0;
    let rt = 0;
    let ded = 0;
    let rpt = 0;
    while (rt < len) {
        rt = lt === rt ? lt + 1 : rt;
        const lv = h[lt];
        const rv = h[rt];
        if (rt > len - 1) break;
        console.log({ lt, lv, rt, rv })
        if (rv < lv) {
            ded += rv;
            console.log({ ded })
            rt++;
        } else {
            let add = Math.min(lv, rv) * (rt - lt - 1) - ded;
            if (rv === lv) {
                rpt += add;
            }
            forward += add;
            console.log({ res: forward })
            ded = 0;
            lt = rt;
        }
    }
    // back scan
    let backward = 0
    rt = len - 1;
    lt = rt;
    ded = 0;
    while (lt > -1) {
        lt = lt === rt ? rt - 1 : lt;
        const lv = h[lt];
        const rv = h[rt];
        if (lt < 0) break;
        console.log({ lt, lv, rt, rv })
        if (rv > lv) {
            ded += lv;
            console.log({ ded })
            lt--;
        } else {
            backward += Math.min(lv, rv) * (rt - lt - 1) - ded;
            console.log({ res: backward })
            ded = 0;
            rt = lt;
        }
    }

    return forward + (backward > 0 ? (backward - rpt) : 0)
};
// @lc code=end
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(trap([2, 0, 2]))
// console.log(trap([0, 5, 6, 4, 6, 1, 0, 0, 2, 7]))
console.log(trap([8, 2, 8, 9, 0, 1, 7, 7, 9]))
