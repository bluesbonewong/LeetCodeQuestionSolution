let strs = ['', '!@#', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
let res = [], query = [], queryLen = 0;

function dfs(ch, nextIdx) {
    if (nextIdx === queryLen) {
        if (ch !== '') res.push(ch); // 防止digit为空
        return;
    }

    let currentQuery = query[nextIdx]; // 当前层所要遍历的字符串
    nextIdx++;
    for (let i = 0; i < currentQuery.length; i++) {
        dfs(ch + currentQuery[i], nextIdx);
    }
}

let letterCombinations = function (digits) {
    for (let numStr of digits)
        query.push(strs[parseInt(numStr)]);

    queryLen = query.length;
    dfs('', 0)

    // 为了校验，更换答案指针，并重置全局变量
    let ans = res;
    res = [], query = [], queryLen = 0;

    return ans;
};
