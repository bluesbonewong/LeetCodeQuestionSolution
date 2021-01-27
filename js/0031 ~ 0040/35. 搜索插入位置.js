let searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let mid = l + r >> 1;

        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
    }

    // 在数组末尾插入要进行特判
    if (nums[l] !== target && l === nums.length - 1) {
        if (nums[l] < target) return nums.length;
        else return nums.length - 1;
    }

    return l;
};
