//
// Created by BluesboneW on 2020/11/21.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
private:
    int f[15][10100];
public:
    int coinChange(vector<int> &coins, int amount) {
        // amount - 背包容量上限
        // 硬币面额 - 物品体积
        // 硬币单个数量1 - 物品价值为1
        // 硬币可用次数无限次 - 物品可用次数无限次

        int n = coins.size(), m = amount;

        // 初始化
        // 先将所有选法先设置为无穷大
        memset(f, 0x3f, sizeof f);
        // 从前i个物品中选，体积为0的选法的价值应当都为0
        for (int i = 0; i <= n; i++) f[i][0] = 0;
        // 但是注意：从前0个物品中选，体积为j的选法是不存在的，应当设为无穷大

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                f[i][j] = f[i - 1][j];
                if (j >= coins[i - 1]) f[i][j] = min(f[i][j], f[i][j - coins[i - 1]] + 1);
            }
        }

        if (f[n][m] == 0x3f3f3f3f) return -1;
        else return f[n][m];
    }
};

int main() {
    Solution *s = new Solution;

    vector<int> v = {1, 2, 5};

    s->coinChange(v, 11);

    return 0;
}
