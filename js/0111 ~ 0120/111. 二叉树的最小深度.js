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
 * @return {number}
 */
let minDepth = function (root) {
  if (!root) return 0;

  let min = Number.MAX_SAFE_INTEGER;
  dfs(root, 1);
  return min;

  function dfs(root, d) {
    if (!root) return undefined;

    // 如果是叶子节点
    if (!root.left && !root.right) {
      min = Math.min(d, min);
      return undefined;
    }

    dfs(root.left, d + 1);
    dfs(root.right, d + 1);
  }
};
