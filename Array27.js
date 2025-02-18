let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let j = nums.length - 1
let i = 0
for(i = 0; i <= j; ){
    if(nums[i] == val && nums[j] != val){
        nums[i] = nums[j];
        i++;
        j--;
        
    }
    if(nums[i] != val){
        i++;
    }
    if(nums[j] == val){
        j--;
    }
}

console.log(i + 1)
console.log(nums)


// for(li = 0; i = j;){
//     if(nums[i] == val && nums[j] != val){
//         nums[i] = nums[j];
//         i++;
//         j--;
//     }
//     if(nums[i] == val && nums[j] == val){
//         j--;
//     }
//     if(nums[i] != val && nums[j] != val){
//         i++;
//     }
//     if(nums[i] != val && nums[j] == val){
//         i++;
//         j--;
//     }
// }