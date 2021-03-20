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
let isSymmetric = function (root) {
    if (root === null) return true;
    let dfs = (p, q) => {
        // 两个都是null
        if (p === null && q === null) return true;
        // 一个是null，一个不是null
        if (p === null && q !== null || p !== null && q === null) return false;

        return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
    }

    return dfs(root.left, root.right);
};
