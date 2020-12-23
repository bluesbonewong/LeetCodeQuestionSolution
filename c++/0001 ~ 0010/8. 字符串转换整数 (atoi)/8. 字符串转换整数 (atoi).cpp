//
// Created by BluesboneW on 2020/12/11.
//

// 不转换的情况
// 1. [第一个非空格字符不是有效整数字符][字符串仅包含空白字符][字符串为空]

// 转换的情况
// 1. 先对第一个字符进行
// 2. 提取有效字符，正号，负号，数字

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int myAtoi(string s) {
        if (s.size() == 0) return 0;
        int flag = 1; // flag确定最后正负，默认为正

        // 去除头部空白符
        int k = 0; // k是一个指针，指向第一个非空白符
        while (k < s.size() && s[k] == ' ') k++;
        if (k == s.size()) return 0; // 说明字符串全是空白符

        // 边界：首字符非数字
        if (s[k] < '0' || s[k] > '9') {
            if (s[k] == '+') flag = 1;
            else if (s[k] == '-') flag = -1;
            else return 0; // 首字符无效，直接return 0

            k++; // 在该字符存在的情况下，跳过该字符
        }

        int r = 0;
        for (int i = k; i < s.size(); i++) {
            if (s[i] < '0' || s[i] > '9') break; // 遇到无效字符，直接退出循环

            int cur = s[i] - '0'; // char转换为数字

            // 判定是否溢出
            if (flag == 1 && r > (INT_MAX - cur * flag) / 10) return INT_MAX;
            if (flag == -1 && r < (INT_MIN - cur * flag) / 10) return INT_MIN;
            r = r * 10 + cur * flag;
        }

        return r;
    }
};
