/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    sArr = s.trim().split(" ");
    return sArr[sArr.length-1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));