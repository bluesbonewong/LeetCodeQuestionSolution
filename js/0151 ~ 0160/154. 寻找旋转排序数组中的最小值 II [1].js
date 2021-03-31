/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function (nums) {
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let mid = l + r >> 1, x = nums[r];

        if (nums[mid] < x) r = mid;
        else if (nums[mid] > x) l = mid + 1;
        else r = r - 1;
    }

    return nums[r];
};
