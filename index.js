function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i <= array.length-1; i++){
   for(let j = i+1; j <= array.length-1; j++){
    if(array[i]+array[j]===target){
      return true
    }
    }
   }
   return false
 }
  


/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  define function has TargetSum
  should take, array, target
  if any of two elements of the array === target
  return true
*/

/*
  Add written explanation of your solution here
  There should be a function that takes two parameters, one array and an integer
  if the sum of any two elements of the array add up to the target integer
  the function should return true otherwise false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
   // Additional Tests
   console.log("Expecting: true (5 + 0 = 5)");
   console.log("=>", hasTargetSum([5, 3, 9, 0, -3], 5));
 
   console.log("");
 
   console.log("Expecting: false (no pair sums up to 100)");
   console.log("=>", hasTargetSum([10, 20, 30, 40, 50], 100));
 
   console.log("");
 
   console.log("Expecting: true (100 + -50 = 50)");
   console.log("=>", hasTargetSum([100, -50, 70, 5], 50));
 
   console.log("");
   console.log("");

   console.log("Expecting: false (only one element)");
   console.log("=>", hasTargetSum([42], 42));
 

}

module.exports = hasTargetSum;
