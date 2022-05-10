/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.includes("")){
        return "";
    }

    let result = "";
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 0; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return result;
            }
        }
        result += strs[0][i];
    }


return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));