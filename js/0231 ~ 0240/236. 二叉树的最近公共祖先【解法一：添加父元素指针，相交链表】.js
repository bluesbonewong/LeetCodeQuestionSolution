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
    // 给每个结点添加一个父元素指针
    let dfs = (father, root) => {
        if (root === null) return;

        root.father = father;
        dfs(root, root.left);
        dfs(root, root.right);
    }

    dfs(null, root);

    // 转化成链表相交节点问题
    let l1 = p, l2 = q;
    while (l1 !== l2) {
        l1 = (l1 === null ? q : l1.father);
        l2 = (l2 === null ? p : l2.father);
    }

    return l1;
};
