// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[Math.abs(nums[i]) - 1] > 0){
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1] ;
        }
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // Add the missing number (index + 1)
        }
    }

    return result;

};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]