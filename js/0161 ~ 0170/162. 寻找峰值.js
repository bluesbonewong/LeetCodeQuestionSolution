let findPeakElement = function (nums) {
    let n = nums.length;
    if (n === 1) return 0;

    let i = 0, a = -Number.MAX_VALUE, b = nums[i], c = nums[i + 1];
    while (i < n) {
        if (b > a && b > c) return i;

        i++;
        a = b, b = nums[i], c = (nums[i + 1] === undefined ? -Number.MAX_VALUE : nums[i + 1]);
    }
};
