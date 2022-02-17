/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  return genAVL(0, nums.length - 1);

  function genAVL(l, r) {
    if (l > r) return null;

    const mid = l + r >> 1;
    const root = new TreeNode(nums[mid]);
    root.left = genAVL(l, mid - 1);
    root.right = genAVL(mid + 1, r);

    return root;
  }
};
