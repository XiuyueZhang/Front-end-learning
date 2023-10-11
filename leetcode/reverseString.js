var reverseString = function(s) {
    let left = 0, right = s.length-1;
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right]= temp;
        left++;
        right--;
    }
};

let s = ["H","a","n","n","a","h"]
console.log(reverseString(s));