/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let subsets = function (nums) {
    let temp = [], res = [];
    let dfs = idx => {
        if (idx === nums.length) {
            res.push([...temp]); // 要浅拷贝一下temp，不然全是引用，temp变res就会变
            return;
        }

        // 选nums[idx]
        temp.push(nums[idx]);

        dfs(idx + 1);
        // 还原现场
        temp.pop();

        // 不选nums[idx]
        dfs(idx + 1);
    }

    dfs(0);

    return res;
};
