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
 * @return {number[]}
 */
let postorderTraversal = function(root) {
  const res = [];
  dfs(root);
  return res;

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    dfs(root.right);
    res.push(root.val);
  }
};
