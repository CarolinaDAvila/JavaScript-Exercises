/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).


Input: an odd integer `n`
Output: an 8-pointed star displayed in a n*n grid

Rules: 
- the smallest input value is 7
- the input will always be an odd number

Write function `star` with `n` as its parameter, display an 8-pointed star in a n*n grid

Examples:

star(7);
// logs   stars      spaces
*  *  *   0, 3, 6    1, 2, 4, 5
 * * *    1, 3, 5    0, 2, 4 
  ***     2, 3, 4    0, 1
*******   7
  ***     2, 3, 4    0, 1
 * * *    1, 3, 5    0, 2, 4
*  *  *   0, 3, 6    1, 2, 4, 5



star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *