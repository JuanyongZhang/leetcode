class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function createBST(values) {
    let root;
    for (v of values) {
        root = insert(root, v);
    }
    return root;
}

function insert(root, value) {
    if (!root)
        return new TreeNode(value);
    if (value <= root.value)
        root.left = insert(root.left, value);
    else
        root.right = insert(root.right, value);
    return root;
}


function inorder(root) {
    if (!root)
        return;
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}

function maxValue(root) {
    if (!root) return Number.MIN_SAFE_INTEGER;
    const ltMax = maxValue(root.left);
    const rtMax = maxValue(root.right);
    return Math.max(root.value, ltMax, rtMax);
}

const root = createBST([5, 3, 1, 4, 7, 6]);
inorder(root);
console.log('maxValue:', maxValue(root));