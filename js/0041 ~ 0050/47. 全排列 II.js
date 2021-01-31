/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function (nums) {
    let s = new Set();
    // numStr - 上一层排列的情况，numIdx - 数组中已使用的数字下标, d - depth
    let dfs = (numStr, numIdx, d) => {
        if (d === nums.length) { // 数组内的数使用完毕
            s.add(numStr);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (numIdx.indexOf(i + '') !== -1) continue;
            dfs(numStr + ' ' + nums[i], numIdx + i, d + 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        dfs(nums[i] + '', i + '', 1);
    }

    let res = [];
    for (let e of s) {
        res.push(e.split(' ').map(e => {
            return parseInt(e);
        }));
    }

    return res;
};
