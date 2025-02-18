let nums = [1, 1, 0, 1, 1, 1, 1];
let count = 0;
let j = 0;

for(let i = 0; i < nums.length; i++){    
    if(nums[i] == 1){
        j++;
    }
    if(nums[i] == 0 || i == nums.length - 1){
        if(j > count){
            count = j;
        }
        j = 0;
    }
}

console.log(count)
console.log(nums)


// berase nw yeserahut nigga 
// i did it bezenezena ;)