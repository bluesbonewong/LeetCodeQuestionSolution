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
 * @return {TreeNode}
 */
let invertTree = function (root) {
    let dfs = root => {
        if (root === null) return;

        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        dfs(root.right);
        dfs(root.left);
    }

    dfs(root);
    return root;
};
