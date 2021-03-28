/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function (preorder, inorder) {
    let len = preorder.length, inmap = new Map();
    for (let i = 0; i < len; i++) inmap.set(inorder[i], i);

    let build = (pl, pr, il, ir) => {
        if (pl > pr || il > ir) return null;
        let root = new TreeNode(preorder[pl]);
        let k = inmap.get(preorder[pl]);

        root.left = build(pl + 1, pl + k - il, il, k - 1);
        root.right = build(pl + k - il + 1, pr, k + 1, ir);

        return root;
    }

    return build(0, len - 1, 0, len - 1);
};
