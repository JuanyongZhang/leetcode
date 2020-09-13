/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const merged = new Map();
    for (const [name, ...vals] of accounts) {
        const emails = [...new Set(vals.sort())];
        if (merged.size === 0) {
            merged.set(emails, name);
            continue;
        }
        const linked = [...merged.keys()].filter(key => {
            return key.find(it => emails.includes(it));
        });
        if (linked.length === 0) {
            merged.set(emails, name);
        } else {
            linked.forEach(it => merged.delete(it));
            linked.push(emails);
            merged.set([...new Set(linked.flatMap(it => it).sort())], name);
        }
    }
    return [...merged.entries()].map(([key, val]) => [val, ...key]);
};


// @lc code=end
const accounts = [
    ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
    ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
    ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
    ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
];


const res = accountsMerge(accounts);
res.forEach(it => console.log(it));
