// in this we are using cyclic sort 

function firstMissingPositive(nums) {
    const n = nums.length; // length of given array
        for (let i = 0; i < n; i++) {
        while (1 <= nums[i] && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1; 
        }
    }
    
    return n + 1; //  returns  next Positive Integer
}

const nums = [1, 2, 0];
const result = firstMissingPositive(nums);
console.log(result);  