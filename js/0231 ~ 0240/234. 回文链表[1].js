/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针找链表中点
// 注意找到的中点是向下取整的
let findMiddle = head => {
    let s = f = head;

    while (f !== null && f.next !== null && f.next.next !== null) {
        s = s.next, f = f.next.next;
    }

    return s;
}

// 翻转链表
let reverseList = (head) => {
    let prev = null, cur = head;
    while (cur !== null) {
        let nextTmp = cur.next;
        cur.next = prev;

        prev = cur;
        cur = nextTmp;
    }

    return prev;
}

let isPalindrome = function (head) {
    if (head === null || head.next === null) return true;

    let firstEnd = findMiddle(head); // 第一条链表的尾部
    let secondReversedStart = reverseList(firstEnd.next); // 第二条链表翻转后的头部

    // 判断是否为回文链表
    let p1 = head, p2 = secondReversedStart, res = true;

    while (p2 !== null) {
        if (p1.val !== p2.val) {
            res = false;
            break;
        }
        p1 = p1.next, p2 = p2.next;
    }

    // 链表还原
    firstEnd.next = reverseList(secondReversedStart);

    return res;
};
