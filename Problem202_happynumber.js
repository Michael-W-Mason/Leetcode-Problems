/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let strN = new String(n);
    let arr = strN.split('');
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += (arr[i] * arr[i]);
    }
    // console.log(sum);
    if(sum == 1){
        return true;
    }
    else if(sum == 4){
        return false;
    }
    return isHappy(sum);
};

console.log(isHappy(19));