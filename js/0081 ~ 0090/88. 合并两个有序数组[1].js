/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, p = m + n - 1; // p - 指向nums1的末尾

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[p--] = nums1[i--];
        } else {
            nums1[p--] = nums2[j--];
        }
    }

    // 扫尾，如果nums1仍有剩余元素，无需理会，因为已在最终数组中
    while (j >= 0) nums1[p--] = nums2[j--];
};
