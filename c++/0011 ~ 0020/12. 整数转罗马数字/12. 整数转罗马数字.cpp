//
// Created by BluesboneW on 2020/12/15.
//
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
private:
    struct node {
        string a, b, c, d;
    };
public:
    string intToRoman(int num) {
        // 构造罗马数字对应的表（个十百千 - 注意千位只有一个字母）
        vector<node> list = {{"I", "IV", "V", "IX"},
                             {"X", "XL", "L", "XC"},
                             {"C", "CD", "D", "CM"},
                             {"M"}};

        // cnt - 记录目前计算第几位，r记录当前位上的数字
        int cnt = 0, r = 0;
        vector<string> v;
        while (num) {
            r = num % 10;
            num /= 10;

            string curs = "";
            node curNode = list[cnt];
            // 根据题意，每一位只有四种情况，分别处理即可
            if (r < 4) {
                while (r--) curs += curNode.a;
            } else if (r == 4) curs += curNode.b;
            else if (5 <= r && r < 9) {
                curs += curNode.c;
                while (r - 5) {
                    curs += curNode.a;
                    r--;
                }
            } else if (r == 9) curs += curNode.d;

            // 对当前位处理完毕后，添加进v数组
            v.push_back(curs);
            cnt++;
        }

        // 通过v拼接每一位
        string res = "";
        for (int i = v.size() - 1; i >= 0; i--) res += v[i];

        return res;
    }
};