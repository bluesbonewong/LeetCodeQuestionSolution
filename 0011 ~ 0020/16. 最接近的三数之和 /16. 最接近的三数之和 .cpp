//
// Created by BluesboneW on 2020/12/21.
// https://leetcode-cn.com/problems/3sum-closest/solution/16-zui-jie-jin-de-san-shu-zhi-he-by-blue-jr2l/
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
private:
    struct node {
        int i, x, y;
    };
public:
    int threeSumClosest(vector<int> &nums, int target) {
        sort(nums.begin(), nums.end()); // 先排序
        int fRes = INT_MAX; // 记录最后总的最接近值
        node ans; // 记录答案

        for (int i = 0; i < nums.size(); i++) {
            // nt和res相对于fRes和ans，记录每一趟的最接近值
            int x = i + 1, y = nums.size() - 1, nt = target - nums[i], res = INT_MAX;
            node current;

            while (x < y && x < nums.size() && y > i) {
                // 计算每一趟的最接近值
                if (abs(nums[x] + nums[y] - nt) <= res) {
                    current = {i, x, y};
                    res = abs(nums[x] + nums[y] - nt);
                }

                // 比nt小，就让小指针前移，否则就让大指针后移
                if (nums[x] + nums[y] < nt) x++;
                else y--;
            }

            if (res < fRes) {
                ans = current;
                fRes = res;
            }
        }

        return nums[ans.x] + nums[ans.y] + nums[ans.i];
    }
};