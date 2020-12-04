//
// Created by BluesboneW on 2020/12/4.
//
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int len = 0;
        unordered_map<char, int> hash;

        // 双指针
        for (int i = 0, j = 0; j < s.size(); j++) {
            hash[s[j]]++;
            while (hash[s[j]] > 1) hash[s[i]]--, i++; // 有重复元素，i指针开始移动
            len = max(len, j - i + 1);
        }

        return len;
    }
};