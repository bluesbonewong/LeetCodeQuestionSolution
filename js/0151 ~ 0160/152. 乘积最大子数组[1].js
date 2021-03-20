/**
 * @param {number[]} nums
 * @return {number}
 */

// f[i]表示以nums[i]为为结尾的乘积最大连续子数组的乘积值
// 转移方程：f[i] = max(f[i - 1] * nums[i], nums[i]);

// 但要注意：f[i - 1] < 0 && nums[i] > 0 && nums[i + 1] < 0
//          这样的话，f[i + 1]的计算结果必然出错
// 因为f[i] = nums[i], f[i + 1] = nums[i + 1]
// 实际上，f[i + 1] === f[i - 1] * nums[i] * nums[i + 1]才是正确答案
// 出现这种情况的原因在于：f[i - 1] * nums[i] < 0 && nums[i + 1] < 0，而它们之积大于0
// 因此我们需要另一个状态数组来存储最大连续子数组最小的乘积值

let maxProduct = function (nums) {
    let fmax = [nums[0]], fmin = [nums[0]], maxVal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        fmax[i] = Math.max(fmax[i - 1] * nums[i], fmin[i - 1] * nums[i], nums[i]);
        fmin[i] = Math.min(fmax[i - 1] * nums[i], fmin[i - 1] * nums[i], nums[i]);

        maxVal = Math.max(maxVal, fmax[i]);
    }

    return maxVal;
};
