//
// Created by BluesboneW on 2020/12/13.
// 题解：https://leetcode-cn.com/problems/container-with-most-water/solution/11-sheng-zui-duo-shui-de-rong-qi-by-blue-1hip/
#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int maxArea(vector<int> &height) {
        int l = 0, r = height.size() - 1;
        int maxVal = -1;

        while (l < r) {
            maxVal = max(maxVal, min(height[l], height[r]) * (r - l));
            if (height[l] < height[r]) l++;
            else r--;
        }

        return maxVal;
    }
};