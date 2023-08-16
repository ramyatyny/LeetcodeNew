 

var removeDuplicates = function(nums) {
     let i=0;
    for (let j=i+1; j<nums.length; j++) {
       if(nums[j] === nums[i]){
           nums.splice(j,1);
           j--;
       } else {
           i=j;
       }
    }
    return nums.length;
};
let nums = [0,0,1,1,1,2,2,3,3,4]
let result = removeDuplicates(nums);
return result;

// nums = [0,0,1,1,1,2,2,3,3,4]
// const x = [...new Set(nums)]
// console.log(x);