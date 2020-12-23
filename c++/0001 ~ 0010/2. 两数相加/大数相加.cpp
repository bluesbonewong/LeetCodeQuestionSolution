//
// Created by BluesboneW on 2020/12/4.
//
#include <iostream>
#include <string>
#include <vector>
#include <cstdio>
#include <sstream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;

    ListNode() : val(0), next(nullptr) {}

    ListNode(int x) : val(x), next(nullptr) {}

    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode *res = new ListNode(-1); // 设头结点val为-1
        ListNode *cur = res; // 尾指针，指向最后一个结点

        int t = 0; // 进位
        // 将l1和l2当做迭代指针
        while (l1 || l2) {
            // 计算
            int a, b;
            if (l1) a = l1->val, l1 = l1->next;
            if (l2) b = l2->val, l2 = l2->next;
            int sum = (a + b + t) % 10;
            t = (a + b + t) / 10;
            // 添加进新链表(尾插法)
            cur->next = new ListNode(sum);
            cur = cur->next;
        }

        if (t > 0) {
            cur->next = new ListNode(1); // 如果有进位，进位必为1，高位补一下即可
            cur = cur->next;
        }

        return res->next;
    }
};
