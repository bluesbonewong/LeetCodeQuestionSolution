let lengthOfLongestSubstring = function (s) {
    let m = []; // map，记录区间元素与重复次数

    let i = 0, j = 0, len = 0;
    for (i = 0, j = 0; i < s.length && j < s.length; j++) {
        // map初始化，把undefined转化为0
        if (m[s[j]] === undefined) m[s[j]] = 0;

        m[s[j]]++;

        if (m[s[j]] === 1) {
            // 无重复，则更新len
            len = Math.max(len, j - i + 1);
        } else {
            // 更新i，直到区间无重复元素
            while (m[s[j]] !== 1) {
                m[s[i]]--;
                i++;
            }
        }
    }

    return len;
};
