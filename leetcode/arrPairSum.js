/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // sort nums
    nums.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=0; i<nums.length; i=i+2){
        sum += nums[i];
    }
    return sum
};

nums = [6,2,6,5,1,2];
console.log(arrayPairSum(nums));