

const permuation = (arr, n) => {
    if (!arr || arr.length === 0) return [];
    const ans = [];
    const cur = [];
    const dfs = (arr, idx, n, used) => {
        // console.log({ arr, idx, n, used, cur, ans })
        if (idx === n) {
            ans.push([...cur])
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;//permuation
            used[i] = true;//permuation
            cur.push(arr[i]);
            dfs(arr, idx + 1, n, used);
            cur.pop();
            used[i] = false;//permuation
        }
    }
    dfs(arr, 0, n, Array(arr.length).fill(false));
    return ans
}

const combination = (arr, n) => {
    if (!arr || arr.length === 0) return [];
    const ans = [];
    const cur = [];
    const dfs = (arr, idx, n, s) => {
        // console.log({ arr, idx, n, s, cur, ans })
        if (idx === n) {
            ans.push([...cur])
            return;
        }
        for (let i = s; i < arr.length; i++) {
            cur.push(arr[i]);
            dfs(arr, idx + 1, n, i + 1);
            cur.pop();
        }
    }
    dfs(arr, 0, n, 0);
    return ans
}


console.log(permuation([1, 2, 3], 3));
console.log(permuation([1, 2, 3], 2));

console.log(combination([1, 2, 3], 3));
console.log(combination([1, 2, 3], 2));