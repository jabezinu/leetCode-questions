// var isPalindrome = function(s) {
//     let result = "";
    

//     for(let i = 0; i < s.length; i++){
//         if(s[i] == s[i].toUpperCase()){
//             result += s[i].toLowerCase();
//         }else{
//             result += s[i]
//         }
        
//     }
//     result = result.replace(/[^a-zA-Z0-9]/g, "");
//     let res = result.split("");

//     let i = 0;
//     let j = res.length - 1;
//     while(i < j){
//         [res[i], res[j]] = [res[j], res[i]]

//         i++;j--;
//     }
//     result = res.join("")
//     return result
    
// };
// console.log(isPalindrome("Hell1324341234:?,O"))


// var isPalindrome = function(s) {
//     let arr = s.split("")
    
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] != )
//     // }
//     return arr
    
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// let demo = "hello, men";

// console.log(demo.toUpperCase())


var isPalindrome = function(s) {
    let lowerC = s.toLowerCase();
    let filterd = lowerC.replace(/[^a-z0-9]/g, "");
    let len = filterd.length;
    let arr = [];
    let j = 0;


    for(let i = len - 1; i >= 0; i--){
        arr[j] = filterd[i];
        j++;
    }
    arr = arr.join("")
    
    if(filterd == arr){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

// let demo = [];

// demo[2] = "ola";

// console.log(demo)