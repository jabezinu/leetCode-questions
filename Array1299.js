var replaceElements = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            arr[i] = -1;
            return arr;
        }
        let max = 0;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > max){
                max = arr[j];
            }
        }
        arr[i] = max
    }
    
    
};

console.log(replaceElements([17,18,5,4,6,1]))
console.log(replaceElements([400]))
// Output: [18,6,6,6,1,-1]