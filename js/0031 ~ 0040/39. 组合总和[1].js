/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 由于保证数组中元素唯一，因此最后无需去重
// 比如重复情况[2, 3, 2]和[2, 2, 3]，但由于每一层都会穷举当前数字的所有情况，所以前者根本不可能出现

// 该题思想延伸-组合综合2


let combinationSum = function (candidates, target) {
    let result = [];

    function dfs(d, sum, arr) { // d - depth
        if (sum === target) {
            result.push(arr);
            return;
        }

        if (d === candidates.length) return;

        while (sum <= target) {
            dfs(d + 1, sum, [...arr]);
            arr.push(candidates[d]);
            sum += candidates[d];
        }
    }

    dfs(0, 0, []);

    return result;
};
