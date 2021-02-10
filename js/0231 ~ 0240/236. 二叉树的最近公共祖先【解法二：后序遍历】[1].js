/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
    let res = null;

    // postorder
    let dfs = (root) => {
        if (root === null) return;

        let fl = dfs(root.left); // 看看左子树是否有p或q
        let fr = dfs(root.right); // 看看右子树是否有p或q

        // 两种情况说明该结点是最近公共祖先
        // 1. 左右子树分别有p、q出现
        // 2. 该结点就是p或者q 并且 左子树或右子树有p或q
        // 3. 这个条件只会在最近公共祖先结点通过，其它公共结点的fl && fr === false
        if (fl && fr || ((root === p || root === q) && (fl || fr))) res = root;

        return (fl || fr) || (root === p || root === q);
    }

    dfs(root);

    return res;
};
