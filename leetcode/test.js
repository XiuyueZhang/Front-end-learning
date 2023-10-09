// const dp = new Array(4);
// for (let i = 0; i < dp.length; i++) {
//   dp[i] = new Array(4).fill(0); 
// }
let dp = new Array(3).fill(new Array(3).fill(1))
console.log(dp, dp[0], dp[0][0]);

dp[0][0] = true;
console.log(dp, dp[0], dp[0][0]);