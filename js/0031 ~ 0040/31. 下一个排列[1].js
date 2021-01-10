let cmp = (a, b) => a - b;

let nextPermutation = function (nums) {
    let n = nums.length, i = n - 1; // i - 迭代指针

    while (i - 1 >= 0 && nums[i - 1] >= nums[i]) i--;
    // 循环结束i是降序序列的最大值，因此还需要--，才能代表第一个不存在于降序序列之中的值
    i--;

    // 此刻，说明没有更大的排列，返回最小排列
    if (i < 0) return nums.sort(cmp);

    // 遍历降序区间，找到恰好比nums[i]大的数，进行交换
    let k = n - 1;
    while (k - 1 >= i) {
        if (nums[k] > nums[i]) break;
        k--;
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];

    // 把[i + 1, n - 1]进行reverse
    let l = i + 1, r = n - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++, r--;
    }
};
