function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = Infinity;
    
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target));  