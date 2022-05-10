/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let remainder = 1;
    let lastIndex = digits.length-1;
    while(true){
        if(lastIndex == 0 && digits[lastIndex] == 9){
            digits[lastIndex] = 0;
            digits.unshift(1);
            return digits;
        }
        else if(digits[lastIndex] == 9){
            digits[lastIndex] = 0;
            lastIndex--;
        }
        else{
            digits[lastIndex]++;
            return digits;
        }
    }
};
console.log(plusOne([9]))