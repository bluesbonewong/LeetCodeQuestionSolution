//
// Created by BluesboneW on 2020/12/22.
//
#include <vector>
#include <algorithm>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    void dfs(TreeNode *r, int deep, vector<vector<int>> &res) {
        if (r == NULL) return;
        deep++;

        // res容量不够，就添加一个一位数组进去
        if (deep + 1 > res.size()) res.push_back({});

        res[deep].push_back(r->val);
        dfs(r->left, deep, res);
        dfs(r->right, deep, res);
    }

    vector<vector<int>> zigzagLevelOrder(TreeNode *root) {
        vector<vector<int>> res;

        // 通过深搜记录深度，并把每一层的数据填充好
        dfs(root, -1, res);

        for (int i = 1; i < res.size(); i += 2) {
            // 调转奇数层的排列次序
            reverse(res[i].begin(), res[i].end());
        }

        return res;
    }
};
