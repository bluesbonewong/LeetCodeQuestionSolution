//
// Created by BluesboneW on 2020/12/10.
//

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <sstream>
#include <unordered_map>

using namespace std;

// 这题主要学会：
// 1. 如何特判溢出
// 2. 数字做法

class Solution {
public:
    // 拿到一个数字的每一位（从个位开始）
    void splitNum(int x) {
        while (x) {
            cout << x % 10 << " "; // 拿到个位
            x /= 10; // 去除个位
        }
    }

    // 把几个数字拼成一个数字
    void mergeNum(vector<int> &v) {
        int r = 0;
        for (auto e : v)
            r = r * 10 + e;

        cout << r;
    }

    int reverse(int x) {
        int r = 0; // 记录反转之后的数值

        // 在c++中，负数进行取模运算，结果也会带上负号
        while (x) { // 最后x会为0
            // 特判关键
            // 要在r溢出的前一个状态进行判断
            if (r > 0 && r > (INT_MAX - x % 10) / 10) return 0; // 根据 r * 10 + x % 10 > INT_MAX，正溢出
            if (r < 0 && r < (INT_MAX - x % 10) / 10) return 0; // 根据 r * 10 + x % 10 > INT_MAX，负溢出
            r = r * 10 + x % 10;
            x /= 10;
        }

        return r;
    }
};