//
// Created by BluesboneW on 2020/12/10.
// 精髓：每次排除掉一半的数（正常情况）
#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2) {
        int tot = nums1.size() + nums2.size(); // 算出合并后数组总长度

        if (tot % 2 == 0) { // 总长度为偶数，中位数 = (left + right) / 2
            int left = find(nums1, 0, nums2, 0, tot / 2);
            int right = find(nums1, 0, nums2, 0, tot / 2 + 1);
            return (left + right) / 2.0;
        } else { // 总长度为奇数，中位数 = 数组中间的元素
            return find(nums1, 0, nums2, 0, tot / 2 + 1);
        }
    }

    // k - 第k小的数，k从1开始
    // i, j - nums1从i开始，nums2从j开始
    int find(vector<int> &nums1, int i, vector<int> &nums2, int j, int k) {
        if (nums1.size() - i > nums2.size() - j)
            return find(nums2, j, nums1, i, k); // 我们默认nums1的长度更小，所以如果nums1长度更大，则调换一下

        // 边界一：k == 1，找目前第1小的数，两个数组第一个元素谁小就是谁
        if (k == 1) {
            if (nums1.size() <= i) return nums2[j]; // 特判：第一个数组可能为空数组
            else return min(nums1[i], nums2[j]);
        }

        // 边界二：nums1为空，则找nums2中第k小的数
        if (nums1.size() <= i) return nums2[j + k - 1];

        // 确定第k / 2个元素的后一个元素的坐标，方便后续递归
        // 注意由于nums1比较短，k比较大的情况下，si可能会越界，(int)强制转换的原因是nums1.size()是一个unsigned long型，无法和int直接比大小
        // j + k - k / 2 而非 j + k / 2是因为k可能为奇数
        int si = min((int) nums1.size(), i + k / 2), sj = j + k - k / 2; // s - sequence
        // 处理两种情况
        if (nums1[si - 1] <= nums2[sj - 1]) return find(nums1, si, nums2, j, k - (si - i)); // k - (si - i)是精髓，它是本轮排除掉的数的剩余
        else return find(nums1, i, nums2, sj, k - (sj - j));
    }
};


