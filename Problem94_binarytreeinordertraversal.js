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


// Recursive Solution
var inorderTraversal = function (root) {
    let arr = [];
    helper(root, arr);
    return arr;
};

function helper(root, arr){
    if(root !== null){
        helper(root.left, arr);
        arr.push(root.val);
        helper(root.right, arr);
    }
}