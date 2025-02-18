// let arry = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 
// let result = []

// let count = 0;
// for(let i = 0; i < arry.length; i++){
//     if(result.includes(arry[i])){
//         count += 1;
//         continue;
//     }
//     else{
//         result.push(arry[i])
//     }
// }
// for(let i = 0; i < count; i++){
//     result.push("x")
// }

// console.log(count +", " + "nums = " + result)
// // console.log("hello") 

let arry = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 
let i = 0
// if(arry.length == 0){
//     console.log("empty array")
// }
for(let j = 1; j < arry.length; j++){
    if(arry[i] != arry[j]){
        
        arry[++i] = arry[j]
    }
    
}

console.log(i + 1)
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 

// var removeDuplicates = function(nums) {
//     let i = 0;
//     for(let j = 1; j < nums.length; j++){
//         if(nums[i] != nums[j]){
//             nums[++i] = nums[j]
//         }
//     }
//     nu
// };

// console.log(removeDuplicates(nums))