/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  let res = true;

  let dfs = (p, q) => {
    if (!p && !q) return;

    if ((!p && q) || (p && !q) || (p.val !== q.val)) {
      res = false;
      return;
    }

    dfs(p.left, q.left);
    dfs(p.right, q.right);
  }

  dfs(p, q);

  return res;
};
