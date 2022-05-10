/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length){
        return -1;
    }
    if(needle == ""){
        return 0;
    }
    for(let i = 0; i < haystack.length; i++){
        let subStr = "";
        for(let j = i; j < needle.length + i; j++){
            subStr += haystack[j]
        }

        if(subStr == needle){
            return i;
        }
    }
    return -1;
};

console.log(strStr("hello","ll"))