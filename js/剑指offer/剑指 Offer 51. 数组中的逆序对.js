// https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/jian-zhi-offer-51-shu-zu-zhong-de-ni-xu-ofbwg/

let temp = [];

let msort = (q, l, r) => {
    if (l >= r) return 0;

    let mid = l + r >> 1;
    // 用res先存放当前序列左右两侧的逆序对数量
    let res = msort(q, l, mid) + msort(q, mid + 1, r);

    // 归并部分：计算一分为二的逆序对的数量
    let k = 0, i = l, j = mid + 1;
    while (i <= mid && j <= r) {
        if (q[i] <= q[j]) temp[k++] = q[i++];
        else {
            // q[i] > q[j]说明q[i]之后的数都大于q[j]
            // 即[q[i], q[mid]]与q[j]皆构成逆序对，逆序对的数量为mid - i + 1
            res += mid - i + 1;
            temp[k++] = q[j++];
        }
    }
    // 扫尾
    while (i <= mid) temp[k++] = q[i++];
    while (j <= r) temp[k++] = q[j++];
    // 还原
    for (i = l, j = 0; i <= r; i++, j++) q[i] = temp[j];

    return res;
};

let reversePairs = function (nums) {
    return msort(nums, 0, nums.length - 1);
};
