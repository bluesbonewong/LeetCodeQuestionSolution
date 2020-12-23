//
// Created by BluesboneW on 2020/11/21.
//
#include <cstring>

// 1. 第一行的每个格子只能从左边来，因此路径数都是1
// 2. 第一列的每个格子只能从上边来，因此路径数都是1
// 3. 其它格子既可以从上面来，也可以从左边来

class Solution {
public:
    int uniquePaths(int m, int n) {
        int f[m + 1][n + 1];
        memset(f, 0, sizeof f);

        // 初始化第一行和第一列
        for (int j = 1; j <= n; j++) f[1][j] = 1;
        for (int i = 1; i <= m; i++) f[i][1] = 1;

        // 从第二行，第二列开始dp
        for (int i = 2; i <= m; i++) {
            for (int j = 2; j <= n; j++) {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            }
        }

        return f[m][n];
    }
};