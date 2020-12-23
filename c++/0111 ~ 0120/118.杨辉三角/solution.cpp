//
// Created by BluesboneW on 2020/12/6.
//

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <sstream>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector <vector<int>> generate(int numRows) {
        vector <vector<int>> res;
        if (numRows == 0) return res;
        // 初始化：第一行只有一个元素1
        res.push_back({1});

        for (int i = 1; i < numRows; i++) {
            // 生成第i行
            vector<int> row;
            for (int j = 0; j <= i; j++) {
                // 每一行首尾必然是1，把首尾跳过
                if (j == 0 || j == i) {
                    row.push_back(1);
                    continue;
                }

                // 从杨辉三角总结出来的公式
                int e = res[i - 1][j - 1] + res[i - 1][j];
                row.push_back(e);
            }
            res.push_back(row);
        }

        return res;
    }
};