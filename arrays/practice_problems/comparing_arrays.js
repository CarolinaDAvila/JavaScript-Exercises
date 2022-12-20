/* Comparing Arrays
Problem: 
        Write a function named `arraysEqual` that takes two arrays as arguments.
        Return `true` if the arrays contains the same values, `false` otherwise.
        Function should test arrays that contain number, string, and boolean values only.
*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true
}