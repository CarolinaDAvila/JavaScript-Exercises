function showMultiplicativeAverage(array) {
  let value = 1;
  for (let num of array) {
    value *= num;
  }

  return (value / array.length).toFixed(3); 
}


function showMultiplicativeAverage(array) {
  let value = array.reduce((accumulator, element) => accumulator * element, 1);
  return (value / array.length).toFixed(3);
}


showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"