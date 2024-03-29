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
 * @return {number[][]}
 */
let levelOrder = function (root) {
    if (root === null) return [];
    let res = [], queue = [root], hh = 0, tt = 0;

    while (hh >= tt) {
        let tmp = [], curLevelCnts = hh - tt + 1;

        while (curLevelCnts--) {
            let node = queue[tt++];
            tmp.push(node.val);

            if (node.left) queue[++hh] = node.left;
            if (node.right) queue[++hh] = node.right;
        }

        res.push(tmp);
    }

    return res;
};
