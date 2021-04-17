/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
    let res = true;
    let dfs = (root, d) => { // d - depth
        if (!res || root === null) return 0;

        let lh = dfs(root.left, d + 1);
        let lr = dfs(root.right, d + 1);

        if (Math.abs(lh - lr) > 1) res = false;

        return Math.max(lh, lr) + 1;
    };

    dfs(root);

    return res;
};
