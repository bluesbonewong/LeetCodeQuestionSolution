// https://leetcode-cn.com/problems/restore-ip-addresses/solution/93-fu-yuan-ipdi-zhi-by-bluesbone_wong-s7ne/

/**
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function (s) {
    if (s.length > 12) return [];
    let res = [];
    // cidx - current-idx，当前搜到的字符
    // cnum - current-num，当前ip的整数个数
    // cres - current-res，当前ip是什么样的
    let dfs = (cidx, cnum, cres) => {
        // 结束条件1
        if (cidx === s.length) {
            if (cnum === 4) {
                cres = cres.slice(0, cres.length - 1);
                res.push(cres);
            }
            return;
        }

        // 结束条件2
        if (cnum > 4) return;

        let t = 0; // t是当前位的整数
        // 每位的整数最多3位，所以有 i < cidx + 3 这个条件
        for (let i = cidx; i < cidx + 3 && i < s.length; i++) {
            // 前导0的数字不能传，i > idx说明是t至少两位，而此时若t为0，则必有前导0
            if (i > cidx && t === 0) break;

            t = t * 10 + (s[i] - '0');
            if (t <= 255) dfs(i + 1, cnum + 1, cres + t + '.');
        }
    }

    // 爆搜每一个字符
    dfs(0, 0, '');

    return res;
};
