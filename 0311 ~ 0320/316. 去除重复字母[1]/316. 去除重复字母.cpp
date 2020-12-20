//
// Created by BluesboneW on 2020/12/20.
// https://leetcode-cn.com/problems/remove-duplicate-letters/solution/316-qu-chu-zhong-fu-zi-mu-by-bluesbone_w-aghz/

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>
#include <unordered_set>
#include <cstring>

using namespace std;

class Solution {
public:
    string removeDuplicateLetters(string s) {
        string stk = ""; // 栈
        unordered_map<char, bool> ins; // instack，记录元素是否已出现在栈中
        unordered_map<char, int> ump; // 记录所有元素的出现次数，方便排查后续是否还有相同元素

        for (auto &i : s) ump[i]++;

        for (auto &i : s) {
            ump[i]--;

            if (ins[i]) continue; // i已出现在栈中，就直接跳过

            char j = stk.back();
            while (j > i && ump[j] != 0) { // 让不符合条件的j出栈
                stk.pop_back();
                ins[j] = false;
                j = stk.back(); // 重新赋值栈顶
            }

            // i进栈
            stk += i;
            ins[i] = true;
        }

        return stk;
    }
};
