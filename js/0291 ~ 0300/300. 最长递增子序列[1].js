/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i]表示以nums[i]结尾的最长上升子序列长度
// 状态转移方程：
// if (nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1);

let lengthOfLIS = function (nums) {
    // dp数组初始化为1，因为序列最少就是只包含自己
    let dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let res = Math.max.call(undefined, ...dp);

    return res;
};
