// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/105-cong-qian-xu-yu-zhong-xu-bian-li-xu-ai6vd/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function (preorder, inorder) {
    // 利用哈希表降低查询中序遍历结点下标的查询复杂度
    let m = new Map();
    for (let i = 0; i < inorder.length; i++) m.set(inorder[i], i);

    // preorder - 前序遍历区间，inorder - 中序遍历区间
    // pl/pr - 前序遍历区间的左右端点，il/ir - 中序遍历区间的左右端点
    let build = (pl, pr, il, ir) => {
        if (pl > pr || il > ir) return null;

        let rootVal = preorder[pl]; // preorder区间的第一个元素一定是子树的根节点
        let root = new TreeNode(preorder[pl]);
        let k = m.get(preorder[pl]); // 找到根节点在inorder里的位置

        // 分割区间继续传递
        root.left = build(pl + 1, k - il + pl, il, k - 1);
        root.right = build(k - il + pl + 1, pr, k + 1, ir);

        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
