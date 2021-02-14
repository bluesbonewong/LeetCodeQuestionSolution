// 双指针，f和s距离为n个结点，这样s == null时，f.next就是要被删除的结点
// 可以想想s指向null时，f应该在哪里，就可以得出他们之间的距离为n个结点

let removeNthFromEnd = function (head, n) {
    let f = s = vh = new ListNode(-1, head); // f和s初始都指向虚拟头结点，这样如果删除头结点则无需特判

    // 让s前进n+1
    for (let i = 0; i < n + 1; i++) {
        s = s.next;
    }

    // f和s一起走，直到 s === null
    while (s !== null) {
        f = f.next, s = s.next;
    }

    // 删除结点
    f.next = f.next.next;

    return vh.next;
};
