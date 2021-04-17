/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
    let res = true;

    let dfs = (root) => {
        if (!res || root === null) return 0;

        let lh = dfs(root.left);
        let rh = dfs(root.right);

        if (Math.abs(lh - rh) > 1) res = false;

        return Math.max(lh, rh) + 1;
    };

    dfs(root);

    return res;
};
