/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

// Your code here
 const avgVal = nums => {
     let avg = 0;

      if(!nums.length) return null;

       for(let i = 0; i < nums.length; i++) {
         let num = nums[i];
          avg += num / nums.length
       }
       return avg;
 };

console.log(avgVal([5, 10]));         // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;
