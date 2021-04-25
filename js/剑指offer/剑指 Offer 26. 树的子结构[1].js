/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

// 核心思路：遍历A的每一个结点，和B一起开始先序遍历，看值是否匹配
// 参考：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/#comment

// 比对A和B
let recur = (A, B) => {
    if (B === null) return true; // 说明B已经匹配完毕
    if (A === null || A.val !== B.val) return false; // 说明A和B并不匹配

    // 递归比对
    return recur(A.left, B.left) && recur(A.right, B.right);
};

let isSubStructure = function (A, B) {
    // A和B都不能为null，否则就是匹配失败
    // 匹配成功有三种情况
    // 1. B是A的子结构
    // 2. B是A的左子树的子结构
    // 3. B是A的右子树的子结构
    return (A !== null && B !== null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};
