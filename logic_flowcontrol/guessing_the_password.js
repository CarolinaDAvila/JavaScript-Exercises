/*
Problem:
        Write a password guessing program 
        that tracks how many times the user enters the wrong password.

        If the user enters the password wrong three times, 
        log "You have been denied access" and
        terminate the program

        If the password is correct 
        log "You have successfully logged in."

Algorithm:
        - declare const `PASSWORD` and assign it to the string 'guess'
        - Create a loop, declare `times` assign it to 0, break if times is >=3
        - prompt the user "Please Enter Your Password"
            - wrong password:
              - if the user enters the wrong password, increment `times`
              - and iterate through the loop again
            - correct password:
              - explictly return "you have successfully logged in"

*/

// const PASSWORD = 'password';

// for (let times = 0; times < 3;) {
//   let input = prompt('Please enter your password');

//   if (input === PASSWORD) {
//     console.log ('You have successfully logged in');
//     break;
//   } else {
//     times += 1;
//   }
// }

// console.log('You have been denied access.')

const PASSWORD = 'password';
let guessingTries = 0;

while (guessingTries < 3) {
  let guess = prompt('Please enter your password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in!')
    break;
  } else {
    guessingTries += 1
  }
}

  if (guessingTries === 3) {
    console.log('You have been denied access.')
  }






















