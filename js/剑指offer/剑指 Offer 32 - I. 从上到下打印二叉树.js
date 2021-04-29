/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let levelOrder = function (root) {
    if (root === null) return [];
    let res = [], queue = [], hh = -1, tt = 0;

    queue[++hh] = root;
    while (hh >= tt) {
        let front = queue[tt++];
        res.push(front.val);

        if (front.left !== null) queue[++hh] = front.left;
        if (front.right !== null) queue[++hh] = front.right;
    }

    return res;
};
