//
// Created by BluesboneW on 2020/12/14.
// 所有异位词排序之后都相同，有一个共同态

#include <string>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs) {
        unordered_map<string, vector<string>> ump; // 是string对vector的映射

        for (auto &str : strs) {
            string nstr = str; // 备份一下str
            sort(nstr.begin(), nstr.end()); // 对nstr排序，构造共同态
            ump[nstr].push_back(str); // 以共同态为根基，进行map
        }

        vector<vector<string>> res;
        for (auto &e : ump) res.push_back(e.second);

        return res;
    }
};