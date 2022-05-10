/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let startIndex = 0;
    for(let i in nums){
        if(nums[i] != val){
            nums[startIndex] = nums[i];
            startIndex++;
        }
    }
    return startIndex;
};