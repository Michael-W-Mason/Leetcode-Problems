/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(const[index, element] of nums.entries()){
        let diff = target - element;
        if(nums.includes(diff) && nums.indexOf(diff) != index){
            return [index, nums.indexOf(diff)];
        }
    }
};

let nums = [3,2,4];
let target = 6;
console.log(twoSum(nums, target));
