//
// Created by BluesboneW on 2020/12/18.
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
    int romanToInt(string s) {
        int num[7] = {1, 5, 10, 50, 100, 500, 1000};
        char c[7] = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
        unordered_map<char, int> ump;

        for (int i = 0; i < 7; i++) {
            ump[c[i]] = num[i];
        }

        int res = 0;
        int i = s.size() - 1, j = i - 1;
        while (i >= 1 && j >= 0) {
            if (ump[s[i]] <= ump[s[j]]) {
                res += ump[s[i]];
                i--, j--;
            } else {
                res += ump[s[i]] - ump[s[j]];
                i -= 2, j -= 2;
            }
        }

        if (i == 0) res += ump[s[i]];

        return res;
    }
};