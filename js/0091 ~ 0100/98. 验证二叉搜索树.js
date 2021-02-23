// 利用BST的中序遍历一定是一个单调递增的序列(不能含重复元素)
let isValidBST = function (root) {
    let arr = [];
    let inorder = root => {
        if (root === null) return;

        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) return false;
    }

    return true;
};
