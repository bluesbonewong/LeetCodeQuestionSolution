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
    let res = [], queue = [root], hh = 0, tt = 0;

    while (hh >= tt) {
        let tmp = [], curLevelCnts = hh - tt + 1; // curLevelCnts - 当前层的结点个数

        while (curLevelCnts--) {
            let node = queue[tt++];
            tmp.push(node.val);

            if (node.left !== null) queue[++hh] = node.left;
            if (node.right !== null) queue[++hh] = node.right;
        }

        res.push(tmp);
    }

    return res;
};
