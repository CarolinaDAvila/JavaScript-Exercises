function triangleValidation(s1, s2, s3) {
  let arr = [s1, s2, s3].sort();

  if (arr.includes(0)) {
    return false;
  } else if (arr[0] + arr[1] < arr[2]) {
    return false;
  } else {
    return true;
  }
}

console.log(triangleValidation(3, 3, 3));
console.log(triangleValidation(3, 3, 1.5));
console.log(triangleValidation(3, 4, 5));
console.log(triangleValidation(0, 3, 3));
console.log(triangleValidation(3, 1, 1));

function triangle (s1, s2, s3) {
  if (!triangleValidation(s1, s2, s3)) {
    return 'invalid'
  }; 

  if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 !== s2 && s2 !== 3) {
    return 'scalene';
  }  else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"