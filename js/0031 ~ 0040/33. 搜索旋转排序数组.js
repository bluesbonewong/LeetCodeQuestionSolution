/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 严格遵循二分的寻找左边界点写法，关键在于 nums[mid] >= target 时，r = mid

let search = function (nums, target) {
    let l = 0, r = nums.length - 1;

    while (l < r) {
        let mid = l + r >> 1;

        if (nums[l] <= nums[mid]) { // 左区间有序(这里一定要带上=号，因为可能会 l === mid ，下同)
            if (nums[l] <= target && nums[mid] >= target) { // target在该区间内，区间更新为左半部分
                r = mid;
            } else { // 否则区间更新为右半部分
                l = mid + 1;
            }
            continue;
        }

        if (nums[mid] <= nums[l]) { // 右区间有序
            if (nums[mid] < target && nums[r] >= target) l = mid + 1;
            else r = mid;
        }
    }

    if (nums[l] === target) return l;
    else return -1;
};
