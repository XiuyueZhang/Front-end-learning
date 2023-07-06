var isAnagram = function(s, t) {
    if(s.length == t.length){
        for(let i=0; i<s.length; i++){
            if(!t.includes(s[i])){
                return false;
            }else{
                t = t.replace(s[i], "")
            }
        }
        return true;
    }else{
        return false;
    }
};

const s = "aat";
let t = "cat"
const res = isAnagram(s,t)
console.log(res)