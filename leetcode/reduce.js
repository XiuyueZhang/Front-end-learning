var reduce = function (nums, fn, init) {
    if (nums.length === 0) {
        return init
    } else {
        let res = init
        for (let i = 0; i < nums.length; i++) {
            res = fn(res, nums[i]);
        }
        return res
    }
};

// Example fn: Subtract each number from the cumulative result
function subtract(acc, num) {
    return acc - num;
}

const nums = [10, 2, 3, 1];
const initial = 20;
const result = reduce(nums, subtract, initial);
console.log(result); // Output: 4 (20 - 10 - 2 - 3 - 1)
