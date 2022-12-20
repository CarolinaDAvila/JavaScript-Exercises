function centerOf(string){
  let length = string.length;
  let middle = Math.floor(string.length / 2);
  if (length % 2 === 1) {
    return string[middle];
  } else {
    return string[middle - 1] + string[middle];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"