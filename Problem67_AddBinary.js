/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a_arr = a.split("");
    b_arr = b.split("");
    len = a_arr.length;
    if(a_arr.legth < b_arr.length){
        len = b_arr.legnth;
    }
    let rem = 0;
    let result = [];
    for(let i = len - 1; i >= 0; i--){
        if(a_arr[i] + b_arr[i] == 2){
            result.push(0 + rem);
            rem += 1;
        }
        else if(a_arr[i] + b_arr[i] + rem == 2){
            rem -= 1;
            result.push(1)
        }
        else if (a_arr[i] + b_arr[i] == 1){
            result.push(0)
        }
        else{
            result.push(0)
        }
        
    }
    if (rem == 1){
        result.push(1)
    }
    return result.join("")
};

console.log(addBinary("1010", "1111"))