//
// Created by BluesboneW on 2020/12/19.
//
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
    void rotate(vector<vector<int>> &matrix) {
        int n = matrix.size();

        for (int k = 0; k < n / 2; k++) { // 每趟遍历一圈，最多遍历 n/2 - 1 圈即可
            int limit = n - k; // 每一圈的长度上限，相当于一个新的n
            for (int i = k, j = k; j < limit - 1 ; j++) { // 遍历第一行每个元素，进行旋转，最多遍历到倒数第二个元素即可

                // 轮转数组的思想，让别人覆盖自己，而非自己去覆盖别人
                int ni, nj, cnt = 4, temp = matrix[i][j]; // temp存第一个元素即可
                while (cnt--) {
                    ni = n - 1 - j, nj = i;
                    matrix[i][j] = (cnt == 0 ? temp : matrix[ni][nj]);
                    i = ni, j = nj;
                }
            }
        }
    }
};