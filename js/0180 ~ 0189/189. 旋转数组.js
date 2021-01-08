let reverse = (nums, i, j) => {
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++, j--;
    }
}

let rotate = function (nums, k) {
    k %= nums.length;
    let i = 0, j = nums.length - k - 1;
    // reverse第一部分
    reverse(nums, i, j);
    // reverse第二部分
    i = nums.length - k, j = nums.length - 1;
    reverse(nums, i, j);
    // 全部reverse
    nums.reverse();
    return nums;
};
