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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 中序 + 后序
// 1. 先递归左子树，将右子树指针(fatherRight)作为参数向下层传递
// 2. 中序处理回溯：左子树非空，则将左子树插入到右子树中
// 3. 再递归右子树
// 4. 后序处理：只有右子树为null的时候，root.right才能连接到fatherRight

let flatten = function (root) {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} fatherRight，父节点的右子树
     */
    let dfs = (root, fatherRight) => {
        if (root === null) return;

        dfs(root.left, root.right);

        if (root.left !== null) {
            root.right = root.left;
            root.left = null;
        }

        dfs(root.right, fatherRight);

        if (root.right === null) root.right = fatherRight;
    }

    dfs(root, null);

    return root;
};
