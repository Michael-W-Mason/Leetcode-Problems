/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(true){
        let mid = Math.floor((start + end) / 2);
        if(end > 0){
            if(start > end){
                return start;
            }
            if(nums[mid] == target){
                return mid;
            }
            if(nums[mid] > target){
                end = mid - 1;
                continue;
            }
            if(nums[mid] < target){
                start = mid + 1;
                continue;
            }
        } 
        if(nums[start] < target){
            return start + 1;
        }
        else{
            return start;
        }
    }
};
console.log(searchInsert([1,3,5,6], 0));