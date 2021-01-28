/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 题目的数组有重复元素，可以借用【组合中和1】的思想，对数组先排序，让相同元素集中
// 再把相同元素视作为一个集合，这样，此题做法就和【组合中和1】一样
// 同样无需去重
// 而且，排序之后，更方便剪枝

let combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b); // 排序
    // 记录每个元素出现的次数
    let map = [];
    for (let e of candidates) {
        if (!map[e]) map[e] = 1;
        else map[e]++;
    }

    let result = [];
    let dfs = (d, sum, combine) => {
        if (sum === target) {
            // 由于要去重，先合并为字符串放入set中
            result.push(combine);
            return;
        }

        let cnum = candidates[d]; // 当前数字

        // 剪枝：
        // d超过数组范围后，已无处理意义
        // 由于数组已排序，因此后面的cnum都比target大，再怎么组合也无法成功
        // sum > target，已无处理意义
        if (d === candidates.length || cnum > target || sum > target) return;

        // 每个元素都可以选i次，i为重复次数
        // dfs时，要在candidate里跳过这个元素的集合
        for (let i = 0; i <= map[cnum]; i++) {
            dfs(d + map[cnum], sum + cnum * i, [...combine]);
            combine = [...combine, cnum];
        }
    }
    dfs(0, 0, []);

    return result;
};
