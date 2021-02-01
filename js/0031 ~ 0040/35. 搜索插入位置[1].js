/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
    // 注意这里的r取值。由于要考虑到插入数组的末尾情况，因此r取nums.length
    let l = 0, r = nums.length;

    // 如果是插入数组末尾，这种情况下r恒等于nums.length
    // 则最后结果l == r，即l == nums.length
    while (l < r) {
        // mid是下取整，因此mid < nums.length
        let mid = l + r >> 1;

        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
    }

    return l;
};
