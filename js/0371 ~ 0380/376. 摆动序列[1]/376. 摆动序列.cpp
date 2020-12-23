//
// Created by BluesboneW on 2020/12/12.
// 题解链接：https://leetcode-cn.com/problems/wiggle-subsequence/solution/376-bai-dong-xu-lie-by-bluesbone_wong-np6m/

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int wiggleMaxLength(vector<int> &nums) {
        // 由于连续的相同数字，最多只需要取一个，因此要先去重
        nums.erase(unique(nums.begin(), nums.end()), nums.end());
        if (nums.size() <= 1) return nums.size(); // 去重之后，对数组进行个数判定

        // 找到所有局部极值，即是答案
        int res = 2; // 头元素和尾元素必是局部极值
        for (int i = 1; i + 1 < nums.size(); i++) {
            // a - 前一个元素，b - 当前元素，c - 后一个元素
            int a = nums[i - 1], b = nums[i], c = nums[i + 1];
            // 第一个条件是局部极小值，第二个条件是局部极大值
            if (a > b && c > b || a < b && c < b) res++;
        }

        return res;
    }
};