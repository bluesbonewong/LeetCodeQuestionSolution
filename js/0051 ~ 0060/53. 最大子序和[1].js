// 看官方题解

let maxSubArray = function (nums) {
    let f = new Array(nums.length);

    f[0] = nums[0];

    let max = f[0];
    for (let i = 1; i < nums.length; i++) {
        f[i] = Math.max(nums[i], f[i - 1] + nums[i]);

        max = Math.max(f[i], max);
    }

    return max;
};
