let maxDepth = function (root) {
    let maxd = 0;
    let dfs = (d, root) => {
        if (root === null) return;
        maxd = Math.max(maxd, d);

        dfs(d + 1, root.left);
        dfs(d + 1, root.right);
    }
    dfs(1, root);

    return maxd;
};
