let inorderTraversal = function (root) {
    let stk = [], tt = -1, res = [], p = root;

    while (tt >= 0 || p !== null) {
        while (p !== null) {
            stk[++tt] = p;
            p = p.left;
        }

        p = stk[tt--];
        res.push(p.val);
        p = p.right;
    }

    return res;
};
