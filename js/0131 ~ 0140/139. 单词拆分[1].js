/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// 参考：https://leetcode-cn.com/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/
// dfs + 记忆化

// 记忆化主要是帮助我们知道哪些分割方案是false，以排除无效递归
let wordBreak = function (s, wordDict) {
    let res = false, memo = []; // memo[i]表示从s[i]开始分割可以得到正确结果
    let wordSet = new Set();
    wordDict.forEach(word => wordSet.add(word));

    let canBreak = start => {
        if (start === s.length) return true;
        if (memo[start] !== undefined) return memo[start];

        for (let i = start + 1; i <= s.length; i++) {
            let prefix = s.slice(start, i);
            if (wordSet.has(prefix) && canBreak(i)) { // 如果前缀部分是单词，且剩余子串能break，返回真
                memo[i] = true;
                return true;
            }
        }
        // 上述过程没有return true，说明从start开始分割失败
        memo[start] = false;
        return false;
    }

    return canBreak(0);
};
