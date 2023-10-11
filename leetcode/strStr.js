var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        return haystack.search(needle);
    }else{
        return -1;
    }
};

haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle))