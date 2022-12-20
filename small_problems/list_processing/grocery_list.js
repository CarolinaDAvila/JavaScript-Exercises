function expandNested(array) {
  let result = [];
  for (let times = 1; times <= array[1]; times += 1) {
    result.push(array[0]);
  } 
  return result;
}

function buyFruit(nestedArray) {
  return nestedArray.flatMap(subarr => expandNested(subarr));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]