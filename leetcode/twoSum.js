var twoSum = function(nums, target) {
    if(nums.length == 2){
        return [0,1]
    }else{
        for(let i = 0; i < nums.length; i++){
            diff = target - nums[i]
            if(nums.includes(diff)){
                if(nums.indexOf(diff) !== i){        
                    return [i, nums.indexOf(diff)]
                }              
            }
        }
    }
};

const res = twoSum([5,6,1,3], 4)
console.log(res)