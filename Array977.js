// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// var sortedSquares = function(nums) {
//     let x = nums.length

//     for(let i = 0; i < x; i++){
//         nums[i] = nums[i] ** 2
//     }

//     // bubble sort
//     for(let i = 0; i < x; i++){
//         for(let j = 0; j < x - i - 1; j++){
//             if(nums[j] > nums[j + 1]){
//                 [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//             }
//         }
//     }

//     return nums
// };

// console.log(sortedSquares([-7,-3,2,3,11]))

let nums = [-4, -1, 0, 3, 10];


// let nums = [-10, -8, 3, 2, 4];
let len = nums.length;
let left = 0;
let right = len - 1;
const result = new Array(len);
let loc = len - 1

while(right >= left){
    let rSquare = nums[right] ** 2;
    let lSquare = nums[left] ** 2;

    if(lSquare > rSquare){
        result[loc] = lSquare;
        left++;
    }else{
        result[loc] = rSquare;
        right--;
    }

    loc--;
}

console.log(result)