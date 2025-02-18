let nums = [12,345,2,6,7896];
let count = 0;

for(let i = 0; i < nums.length; i++){
    let x = Math.floor(Math.log10(Math.abs(nums[i])) + 1);
    if(x % 2 == 0){
        count++;
    }
}

console.log(count)











