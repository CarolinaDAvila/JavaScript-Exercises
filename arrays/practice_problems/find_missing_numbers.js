/* Find Missing Numbers
Problem:
        Write a function that takes a sorted array of integers as an argument
        return an array that includes all the missing integers (in order)
        between the first and last elements of the argument.
*/

// function fullArray(array) {
//   let end = array[array.length - 1];
//   let resultArray = [];

//   for (let start = array[0]; start <= end; start += 1) {
//     resultArray.push(start);
//   }
//   return resultArray;
// }

// function missing(sortedArray) {
//   let newArray = [];
//   let totalArray = fullArray(sortedArray);

//   totalArray.forEach(function(num) {
//     if (!sortedArray.includes(num)) {
//       newArray.push(num);
//     }
//   });

//   return newArray;
// }

function missing(array){
  let result = [];
  let start = array[0];
  let end = array[array.length - 1];

  for (; start <= end; start += 1) {
    if (!array.includes(start)) {
      result.push(start);
    }
  }
  return result;
}

missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([6]);                             // []
