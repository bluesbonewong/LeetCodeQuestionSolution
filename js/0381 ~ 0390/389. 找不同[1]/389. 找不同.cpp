//
// Created by BluesboneW on 2020/12/18.
//

// 牢记亦或的作用：去重

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
    char findTheDifference(string s, string t) {
        int x = 0;
        for (auto &c : s) x ^= c;
        for (auto &c : t) x ^= c;
        return x;
    }
};