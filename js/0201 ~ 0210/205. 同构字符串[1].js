// https://leetcode-cn.com/problems/isomorphic-strings/solution/205-tong-gou-zi-fu-chuan-by-bluesbone_wo-zgbk/

let isIsomorphic = function (s, t) {
    const n = s.length;
    const s2t = {}, t2s = {}; // 普通的字符串map用对象即可，无需Map
    // 构造s和t的相互映射关系
    for (let i = 0; i < n; i++) {
        let x = s[i], y = t[i];
        // 构造s->t并判断
        if (!s2t[x]) s2t[x] = y;
        else if (s2t[x] !== y) return false;
        // 构造t->s并判断
        if (!t2s[y]) t2s[y] = x;
        else if (t2s[y] !== x) return false;
    }

    return true;
};
