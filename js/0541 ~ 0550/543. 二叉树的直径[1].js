// https://leetcode-cn.com/problems/diameter-of-binary-tree/solution/543-er-cha-shu-de-zhi-jing-by-bluesbone_-02ws/

// 计算 左子树深度 + 右子树深度，再和max比大小
let diameterOfBinaryTree = function (root) {
    let max = 0;
    let dfs = (root) => {
        // 空节点返回0
        if (root === null) return 0;

        // 先递归
        let leftd = dfs(root.left);
        let rightd = dfs(root.right);

        // 计算每颗子树的左右子树深度之和，和max比较
        max = Math.max(leftd + rightd, max);

        // return 左右子树里最大的深度 + 1
        return Math.max(leftd, rightd) + 1;
    }

    dfs(root);

    return max;
};
