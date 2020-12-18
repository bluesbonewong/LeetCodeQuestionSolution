//
// Created by BluesboneW on 2020/12/18.
//

// 时间复杂度为线性，指的是时间复杂度为O(n)
// 异或运算有以下三个性质。
// 1. 任何数和0做异或运算，结果仍然是原来的数，即a⊕0=a
// 2. 相同数做异或运算，结果是0，即a⊕a=0。
// 3. 异或运算满足交换律和结合律，即a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b 【这一点是关键，因为 (6 ^ 7 ^ 6 = 1 ^ 6 = 7) = (6 ^ 6 ^ 7 = 7)，相当于亦或运算会自动排序】

// 异或运算的作用：去重

// ！！一般哈希能解决的问题，可以考虑亦或行不行，这样可以降低空间复杂度
#include <vector>

using namespace std;

class Solution {
public:
    int singleNumber(vector<int> &nums) {
        int a = 0;
        for (auto e: nums) a = a ^ e;
        return a;
    }
};