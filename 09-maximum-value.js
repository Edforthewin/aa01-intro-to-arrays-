/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

// Your code here
const maxVal = nums => {
     let max = null;

      for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
         if(max === null || num >= max) {
             max = num
         }
      }
      return max;
};

console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
console.log(maxVal([-2, -3, -7, 3 ]));    // 3
console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;
