//
// Created by BluesboneW on 2020/11/21.
//
#include <iostream>
#include <vector>

using namespace std;

class Solution {
private:
    const static int INF = 0x3f3f3f3f;
public:
    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size(), m = amount, f[10010];

        // 初始化：价值为0的硬币选法就是选0个硬币，其它设为无穷大，也是方便后面的min
        memset(f, 0x3f, sizeof f);
        f[0] = 0;

        for (int i = 1; i <= m; i++) {
            for (int j = 0; j < n; j++) {
                if (coins[j] <= i) f[i] = min(f[i], f[i - coins[j]] + 1);
            }
        }

        if (f[m] == INF) return -1;
        else return f[m];
    }
};