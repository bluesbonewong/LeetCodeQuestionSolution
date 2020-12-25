// 题解：https://leetcode-cn.com/problems/assign-cookies/solution/455-fen-fa-bing-gan-by-bluesbone_wong-yzm5/
let cmp = (a, b) => a - b;

let findContentChildren = function (g, s) {
    g.sort(cmp), s.sort(cmp);
    let i = 0, j = 0, mc = 0; // max-cnt

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) mc++, i++, j++;
        else j++;
    }

    return mc;
};
