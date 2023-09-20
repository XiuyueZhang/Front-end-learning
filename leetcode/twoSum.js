var twoSum = function (nums, target) {
    if (nums.length == 2) {
        return [0, 1]
    } else {
        for (let i = 0; i < nums.length; i++) {
            diff = target - nums[i]
            if (nums.includes(diff)) {
                if (nums.indexOf(diff) !== i) {
                    return [i, nums.indexOf(diff)]
                }
            }
        }
    }
};

const res = twoSum([5, 6, 1, 3], 4)
console.log(res)

// O(1) 解法：
// 这道题最优的做法时间复杂度是 O(n)。
// 顺序扫描数组,对每一个元素,在 map 中找能组合给定值的另一半数字,如果找到了,直接返回 2 个
// 数字的下标即可。如果找不到,就把这个数字存入 map 中,等待扫到“另一半”数字的时候,再取出来返
// 回结果。

var twoSum2 = function(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        // Check if the complement exists in the hash map
        if (numIndices.hasOwnProperty(diff)) {
            return [numIndices[diff], i];
        }
        
        // Store the current number and its index in the hash map
        numIndices[nums[i]] = i;
    }
    
    // Return an empty array if no solution is found
    return [];
};