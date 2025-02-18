var checkIfExist = function(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(2 * arr[j] == arr[i] && i != j){
            return true;
        }
    }
  }
  return false;
};

console.log(checkIfExist([10,2,5,3]))
console.log(checkIfExist([3,1,7,11, 0]))
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))