// https://leetcode-cn.com/problems/unique-binary-search-trees-ii/solution/95-bu-tong-de-er-cha-sou-suo-shu-ii-by-b-fxac/

// 乘法原理：干第一件事儿有n种方案，干第二件事儿有m种方案，一起干有nm种方案
// 根节点不同，但某些根节点会共用子节点

let generateTrees = function (n) {
    let dfs = (l, r) => {
        if (l > r) return [null]; // 分治到底
        let res = [];

        // 该区间内，遍历每个数，让其作为root
        for (let i = l; i <= r; i++) {
            let left = dfs(l, i - 1), right = dfs(i + 1, r);

            // 乘法原理：左区间所有情况 * 右区间所有情况
            for (let leftItem of left) {
                for (let rightItem of right) {
                    let root = new TreeNode(i);
                    root.left = leftItem;
                    root.right = rightItem;
                    res.push(root);
                }
            }
        }

        return res;
    }

    return dfs(1, n);
};
