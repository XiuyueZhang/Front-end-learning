/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let len = s.length;

    if(len === 1){
        return s;
    }

    // let dp = new Array(len).fill(new Array(len).fill(false))
    const dp = new Array(len);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(len).fill(false); 
    }
    let maxLen = 1;
    let begin = 0;

    for(let i=0; i<len; i++){
        dp[i][i] = true;
    }


    for(let j=1; j<len; j++){
        for(let i=0; i<j; i++){
            if(s[i] !== s[j]){
                dp[i][j] = false;
            }else{
                if(j -i < 3){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }

                if(dp[i][j] && (j-i+1)>maxLen){
                    maxLen = j-i+1;
                    begin = i;
                }
            }
        }
    }
    
    console.log(begin, maxLen)
    return s.substring(begin, begin+maxLen)
}


var s = "babaq";
console.log(longestPalindrome(s));