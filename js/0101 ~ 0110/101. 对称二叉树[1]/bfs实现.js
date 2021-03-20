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
    // 保证root左右子树都存在
    if (root.left === null && root.right === null) return true;
    if (root.left === null || root.right === null) return false;
    // 为了保证后序操作统一，我们让root入队两次
    let queue = [root.left, root.right], hh = 0, tt = 1;
    while (hh <= tt) {
        let p = queue[hh++];
        let q = queue[hh++];

        // p和q都是空节点
        if (p === null && q === null) continue;
        if (p === null || q === null || p.val !== q.val) return false;

        queue[++tt] = p.left;
        queue[++tt] = q.right;
        queue[++tt] = p.right;
        queue[++tt] = q.left;
    }

    return true;
};
