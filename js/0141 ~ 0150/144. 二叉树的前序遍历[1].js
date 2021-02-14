let preorderTraversal = function (root) {
    let stk = [], tt = -1, res = [], p = root;

    while (tt >= 0 || p !== null) {
        while (p !== null) {
            res.push(p.val);
            stk[++tt] = p;
            p = p.left;
        }

        p = stk[tt--];
        p = p.right;
    }

    return res;
};
