/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let stack = [];
    for(let i of s){
        if(i in brackets){
            stack.push(i)
        }
        else if(Object.values(brackets).indexOf(i) > -1){
            if (i == brackets[stack[stack.length-1]])
        }
    }
};