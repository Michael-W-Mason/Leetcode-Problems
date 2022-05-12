/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let hashMap = {};
    let result = [];
    let curProd = 1;
    for(let i in nums){
        if(nums[i] == 0){
            if(hashMap["zero"] === 0){
                return new Array(nums.length).fill(0);
            }
            else{
                hashMap["zero"] = 0;
            }
        }
        result.push(curProd);
        curProd *= nums[i];
    }
    curProd = 1;
    for(let j = nums.length - 1; j >= 0; j--){
        result[j] *= curProd;
        curProd *= nums[j];
    }
    return result;
};

console.log(productExceptSelf([0,2,0,0]));