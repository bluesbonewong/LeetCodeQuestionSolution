/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function (inorder, postorder) {
    let m = new Map();
    for (let i = 0; i < inorder.length; i++) m.set(inorder[i], i);

    let build = (pl, pr, il, ir) => {
        if (pl > pr || il > ir) return null;

        let rootVal = postorder[pr];
        let root = new TreeNode(rootVal);
        let k = m.get(rootVal);

        root.left = build(pl, pr - ir + k - 1, il, k - 1);
        root.right = build(pr - ir + k, pr - 1, k + 1, ir);

        return root;
    }

    return build(0, postorder.length - 1, 0, inorder.length - 1);
};
