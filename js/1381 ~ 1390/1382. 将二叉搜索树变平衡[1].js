/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let balanceBST = function (root) {
  const arr = [];
  inOrder(root);
  return genAVL(0, arr.length - 1);

  function inOrder(root) {
    if (!root) return;

    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  }

  function genAVL(l, r) {
    if (l > r) return null;

    let mid = l + r >> 1;
    let root = new TreeNode(arr[mid])

    root.left = genAVL(l, mid - 1);
    root.right = genAVL(mid + 1, r);

    return root;
  }
};
