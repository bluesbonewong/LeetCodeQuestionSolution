//
// Created by BluesboneW on 2020/12/11.
//

#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;

        // 直接通过数学方法把x调转，由于x是int
        // 位数最多十几位，复杂度O(1)
        // 唯一要注意的是在逆转过程中可能会出现溢出情况，而这种情况一出现即可断定必然是非回文串

        int t = x, r = 0;
        while (t) {
            if (r > (INT_MAX - t % 10) / 10) return false;
            r = r * 10 + t % 10;
            t /= 10;
        }

        return r == x;
    }
};