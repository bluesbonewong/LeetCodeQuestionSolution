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
 * @return {number[][]}
 */

let pathSum = function (root, targetSum) {
    let res = [];
    let dfs = (root, path, sum) => {
        if (root === null) return;

        sum += root.val;
        let pathCopy = [...path, root.val];
        // 如果当前结点是叶子结点
        if (root.left === null && root.right === null) {
            if (sum === targetSum) res.push(pathCopy);
        }

        dfs(root.left, pathCopy, sum);
        dfs(root.right, pathCopy, sum);
    }

    dfs(root, [], 0);

    return res;
};
