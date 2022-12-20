/*
Featured Number:
                - odd number
                - multiple of 7
                - each digit occurs once each

Problem:
                - Write a function that takes an integer as an argument and 
                - returns the next featured number greater than the integer. 
                - Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

*/

function getNextOddNumber(number) {
  if (number % 2 === 0) {
    return number + 1;
  } else {
    return number + 2;
  }
}

// ['9', '9', '7']
// function onlyOnce(number) {
//   let result = [];
//   String(number).split('').forEach(function(char) {
//     if (result.includes(char)) {
//       return false;
//     }
//   });
//   return true;
// }


function getNextOddNumber(number) {
  if (number % 2 === 0) {
    return number + 1;
  } else {
    return number + 2;
  }
}

function onlyOnce(number) {
  let result = [];
  let arr = String(number).split('');
  
  arr.forEach(function(char) {
    if (!result.includes(char)) {
      result.push(char);
    } 
  });

  return result.length === arr.length;
}

function featured(number) {
  let oddNum = getNextOddNumber(number);
  let max = 9876543201;
  
  for (let num = oddNum; num <= max; num += 2 ) {
    if (num % 7 === 0 && onlyOnce(num)) {
      return num;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}


console.log(featured(12)           === 21)
console.log(featured(20)           === 21)
console.log(featured(21)           === 35)
console.log(featured(997)          === 1029)
console.log(featured(1029)         === 1043)
console.log(featured(999999)       === 1023547)
console.log(featured(999999987)    === 1023456987)
console.log(featured(9876543186)   === 9876543201)
console.log(featured(9876543200)   === 9876543201)
console.log(featured(9876543201)   === "There is no possible number that fulfills those requirements.")


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."