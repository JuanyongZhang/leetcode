/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */
class UnionFindSet {
    constructor(n) {
        this.ranks = Array(n + 1).fill(0);
        this.parents = Array(n + 1).fill(0);
        for (let i = 0; i < this.parents.length; i++) {
            this.parents[i] = i;
        }
        console.log('New:', { ...this });
    }

    find(a) {
        if (a !== this.parents[a])
            this.parents[a] = this.find(this.parents[a]);
        console.log('Fnd:', { ...this });
        return this.parents[a];
    }

    union(a, b) {
        const pa = this.find(a);
        const pb = this.find(b);
        if (pa === pb) return false;
        if (this.ranks[pa] > this.ranks[pb])
            this.parents[pb] = pa;
        else if (this.ranks[pa] < this.ranks[pb])
            this.parents[pa] = pb;
        else {
            this.parents[pb] = pa;
            this.ranks[pb] += 1;
        }
        console.log('Uno:', { ...this });
        return true;
    }
}
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

/**
     public List<List<String>> accountsMerge(List<List<String>> acts) {
        Map<String, String> owner = new HashMap<>();
        Map<String, String> parents = new HashMap<>();
        Map<String, TreeSet<String>> unions = new HashMap<>();
        for (List<String> a : acts) {
            for (int i = 1; i < a.size(); i++) {
                parents.put(a.get(i), a.get(i));
                owner.put(a.get(i), a.get(0));
            }
        }
        for (List<String> a : acts) {
            String p = find(a.get(1), parents);
            for (int i = 2; i < a.size(); i++)
                parents.put(find(a.get(i), parents), p);
        }
        for(List<String> a : acts) {
            String p = find(a.get(1), parents);
            if (!unions.containsKey(p)) unions.put(p, new TreeSet<>());
            for (int i = 1; i < a.size(); i++)
                unions.get(p).add(a.get(i));
        }
        List<List<String>> res = new ArrayList<>();
        for (String p : unions.keySet()) {
            List<String> emails = new ArrayList(unions.get(p));
            emails.add(0, owner.get(p));
            res.add(emails);
        }
        return res;
    }
    private String find(String s, Map<String, String> p) {
        return p.get(s) == s ? s : find(p.get(s), p);
    }

 */
// accountsMerge = function (accounts) {
//     // const s = new UnionFindSet(accounts.length);
//     const edges = accounts.flatMap(([name, ...emails]) => emails.map(e => [name, e]));
//     console.log(edges);

// };

// @lc code=end
const accounts = [
    ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
    ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
    ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
    ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
];


const res = accountsMerge(accounts);
console.log(res);
// res.forEach(it => console.log(it));

/*
Accepted
49/49 cases passed (1884 ms)
Your runtime beats 5.16 % of javascript submissions
Your memory usage beats 28.54 % of javascript submissions (57.9 MB)
*/