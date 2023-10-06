/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1){
        return "";
    }else{
        // sort the array
        strs.sort((a,b) => a.length - b.length);
        let res = strs[0];
        let prev ="";
        let curr = res;
        while(prev !== curr){
            prev = curr;
            for(let i=1; i<strs.length; i++){
                if(!strs[i].startsWith(curr)){
                    curr = curr.slice(0,-1)
                    break;
                }
            }
        }
        return curr;
    }
};

console.log(longestCommonPrefix(["reflower","flow","flight"]));