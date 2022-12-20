function triangleValidation(s1, s2, s3) {
  let arr = [s1, s2, s3];
  if (arr.includes(0) || s1 + s2 + s3 !== 180) {
    return false;
  }
  return true;
}

function triangle(s1, s2, s3) {
  if (!triangleValidation(s1, s2, s3)) {
    return 'invalid';
  }

  let arr = [s1, s2, s3];
  if (arr.includes(90)) {
    return 'right';
  } else if (arr.every(num => num < 90)) {
    return 'acute';
  } else if (arr.some(num => num > 90)) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"