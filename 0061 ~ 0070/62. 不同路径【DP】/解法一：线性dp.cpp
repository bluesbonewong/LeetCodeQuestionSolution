//
// Created by BluesboneW on 2020/11/21.
//
#include <cstring>

class Solution {
public:
    int uniquePaths(int m, int n) {
        int f[m + 1][n + 1];

        memset(f, 0, sizeof f);

        // 初始化第一行，一定全是1
        for (int j = 1; j <= n; j++) f[1][j] = 1;

        // 从第二行开始
        for (int i = 2; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            }
        }

        return f[m][n];
    }
};