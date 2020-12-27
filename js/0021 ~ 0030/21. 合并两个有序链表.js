function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let mergeTwoLists = function (l1, l2) {
    let ans = new ListNode(-1); // 空的头结点
    let p = ans; // p是指针

    while (l1 && l2) {
        let newNode;
        if (l1.val <= l2.val) newNode = new ListNode(l1.val), l1 = l1.next;
        else newNode = new ListNode(l2.val), l2 = l2.next;

        p.next = newNode;
        p = p.next;
    }

    if (l1) p.next = l1;
    if (l2) p.next = l2;

    return ans.next;
};
