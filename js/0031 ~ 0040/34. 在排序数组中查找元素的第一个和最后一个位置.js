/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1, result = [-1, -1];

    while (l < r) {
        let mid = l + r >> 1;

        if (nums[mid] >= target) r = mid;
        else l = mid + 1;
    }

    if (nums[l] !== target) return result;

    while (r + 1 <= nums.length - 1 && nums[r + 1] === nums[r]) r++;

    result[0] = l, result[1] = r;
    return result;
};
