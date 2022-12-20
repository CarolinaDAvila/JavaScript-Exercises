// Question 1

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {                                // [1, 2, 3]
  let value = arr.pop();                           // value === 3  arr => [1, 2]
  console.log(`popped ${value} from the array`);   // 3
  return value + bar + baz;                        // 3 + 3 + 3 => returns 9 
}

foo(qux);                                          // reurns [1, 2]

// `line 8` has a side effect. It will destructively remove the last element of `arr` which is
// essentially `qux`. 
// The function writes something to the console

//Question 2
// 2, 3, 5