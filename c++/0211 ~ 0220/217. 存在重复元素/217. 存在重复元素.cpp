//
// Created by BluesboneW on 2020/12/13.
//
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // 使用set（也可以使用map）
        unordered_set<int> us;

        for (auto e : nums) {
            if (us.count(e)) return true;
            else us.insert(e);
        }

        return false;
    }
};