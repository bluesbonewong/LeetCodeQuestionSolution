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
 * @return {number[]}
 */
let rightSideView = function (root) {
    let res = [];

    let dfs = (d, root) => { // d - depth
        if (root === null) return;

        if (res[d] === undefined) res[d] = [];

        res[d].push(root.val);

        dfs(d + 1, root.right);
        dfs(d + 1, root.left);
    }

    dfs(0, root);

    let ans = [];
    for (let e of res) ans.push(e[0]);

    return ans;
};
