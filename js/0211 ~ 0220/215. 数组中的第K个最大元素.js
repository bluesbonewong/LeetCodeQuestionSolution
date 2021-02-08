/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let qsort = (nums, l, r) => {
    if (l >= r) return;

    let x = nums[l], i = l - 1, j = r + 1;
    while (i < j) {
        do i++; while (nums[i] < x);
        do j--; while (nums[j] > x);
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    qsort(nums, l, j);
    qsort(nums, j + 1, r);
}

let findKthLargest = function (nums, k) {
    if (nums.size === 0) return -1;
    // 快排
    qsort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
};
