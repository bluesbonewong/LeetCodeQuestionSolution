/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function (nums) {
    let output = [1];
    // 构建数组前缀
    for (let i = 1; i < nums.length; i++) output[i] = output[i - 1] * nums[i - 1];
    // 构建数组后缀 && 生成output
    let suffix = 1; // 用suffix暂存数组后缀
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i !== nums.length - 1) {
            suffix = suffix * nums[i + 1];
        }

        output[i] = output[i] * suffix;
    }

    return output;
};
