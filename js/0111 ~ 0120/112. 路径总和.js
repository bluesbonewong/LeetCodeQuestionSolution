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
 * @param {number} targetSum
 * @return {boolean}
 */
let hasPathSum = function (root, targetSum) {
    let res = false;
    let dfs = (root, sum) => {
        if (root === null) return;

        sum += root.val;
        if (root.left === null && root.right === null && targetSum === sum) res = true;

        dfs(root.left, sum);
        dfs(root.right, sum);
    }

    dfs(root, 0);

    return res;
};
