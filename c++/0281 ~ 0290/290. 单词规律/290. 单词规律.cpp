//
// Created by BluesboneW on 2020/12/16.
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
    bool wordPattern(string pattern, string s) {
        vector<string> v;
        // 双指针拆分str
        int i = 0, j = 0;
        while (i < s.size() && j < s.size()) {
            if (s[j] != ' ') j++;
            else {
                v.push_back(s.substr(i, j - i));
                i = ++j;
            }
        }
        v.push_back(s.substr(i, j - i));

        // 长度不同，直接false
        if (pattern.size() != v.size()) return false;

        // 检查是否满足任意一个字符都对应着唯一的字符串
        unordered_map<char, string> c2s;
        // 再检查是否满足任意一个字符串也只被唯一的一个字符对应
        unordered_map<string, char> s2c;
        for (int i = 0; i < pattern.size(); i++) {
            char c = pattern[i]; // currentChar

            if (c2s[c].empty()) c2s[c] = v[i];
            else if (c2s[c] != v[i]) return false;

            if (s2c[v[i]] == 0) s2c[v[i]] = c;
            else if (s2c[v[i]] != c) return false;
        }

        return true;
    }
};