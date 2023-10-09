s = "a good   example  "

var reverseWords = function(s) {
    const newStr = s.replace(/\s+/g, ' ').trim().split(" ").reverse().join(" ")
    return newStr
};

console.log(reverseWords(s))