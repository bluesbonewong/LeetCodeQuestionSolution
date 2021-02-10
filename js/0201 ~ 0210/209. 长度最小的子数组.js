/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (target, nums) {
    if (nums.length === 0) return 0;
    let i = j = 0, csum = nums[0], len = 0x3f3f3f3f;

    while (i < nums.length && j < nums.length) {
        if (csum >= target) {
            len = Math.min(len, j - i + 1);
            csum -= nums[i++];
        } else if (csum < target) {
            csum += nums[++j];
        }
    }

    return len === 0x3f3f3f3f ? 0 : len;
};
