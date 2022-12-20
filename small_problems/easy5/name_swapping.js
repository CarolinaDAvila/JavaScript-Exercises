function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ')
}

console.log(swapName('Joe Roberts'));     // "Roberts, Joe"
console.log(swapName('Carolina Avila'));  // "Avila, Carolina"
console.log(swapName('Georgia Byrd'));    // "Byrd, Georgia"