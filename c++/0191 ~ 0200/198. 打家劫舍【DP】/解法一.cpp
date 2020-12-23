//
// Created by BluesboneW on 2020/11/21.
//

#include <vector>

using namespace std;

// 线性dp问题

class Solution {
private:
    int f[200];
public:
    int rob(vector<int> &nums) {
        // 没有屋子
        if (nums.size() == 0) return 0;

        // 初始化，只有一间屋子
        f[1] = nums[0];

        for (int i = 2; i <= nums.size(); i++) {
            f[i] = max(f[i - 2] + nums[i - 1], f[i - 1]);
        }

        return f[nums.size()];
    }
};