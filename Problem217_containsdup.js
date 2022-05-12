/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashMap = {};
    for (let i of nums) {
        if (hashMap[i] === 0) {
            return true;
        }
        else {
            hashMap[i] = 0;
        }
    }
    return false;
};