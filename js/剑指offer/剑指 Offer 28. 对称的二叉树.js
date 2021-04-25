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

function isSame(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    return n1.val === n2.val;
}

let isSymmetric = function (root) {
    if (root === null) return true;
    let q = [root.left, root.right], tt = 1, hh = 0;

    while (hh <= tt) {
        let p1 = q[hh++], p2 = q[hh++];

        if (!isSame(p1, p2)) return false;

        if (p1 !== null) q[++tt] = p1.left;
        if (p2 !== null) q[++tt] = p2.right;
        if (p1 !== null) q[++tt] = p1.right;
        if (p2 !== null) q[++tt] = p2.left;
    }

    return true;
};
