var searchInsert = function(nums, target) {
    const len = nums.length;
    let left = 0, right = len-1;
    if(nums[0] >= target){
        return 0;
    }else if(nums[len-1] < target){
        return len;
    }else if(nums[len-1] === target){
        return len-1;
    }else{
        while(left <= right){
            midIndex = Math.floor((right+left)/2);
            if(nums[midIndex] > target){
                right = midIndex-1;
            }else if(nums[midIndex] < target){
                left = midIndex+1;
            }else{
                return midIndex;
            }
        }
        return left;
    }
};

console.log(searchInsert([2,7,8,10], 9))