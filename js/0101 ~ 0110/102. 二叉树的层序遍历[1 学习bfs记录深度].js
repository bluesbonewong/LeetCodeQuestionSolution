/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

let levelOrder = function (root) {
    if (root === null) return [];

    let q = [], hh = 0, tt = -1;
    let res = [];

    // 给根节点添加level属性，记录层数
    root.level = 0;
    // 把根节点入队
    q[++tt] = root;
    while (tt >= hh) {
        // 出队
        let t = q[hh++];
        let level = t.level;
        if (res[level] === undefined) res[level] = [];
        res[level].push(t.val);

        // 每个存在的子节点，都要添加level属性，其值是其父节点的level + 1
        if (t.left !== null) {
            q[++tt] = t.left;
            t.left.level = level + 1;
        }
        if (t.right !== null) {
            q[++tt] = t.right;
            t.right.level = level + 1;
        }
    }

    return res;
};
