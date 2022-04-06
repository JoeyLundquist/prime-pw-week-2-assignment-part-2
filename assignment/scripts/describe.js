// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We set a variable called name and its value to "Dane"
// We check if the name is 'Mary' if true we console.log 'Hi, Mary!'
// if false we console.log 'How do you do?'
// We console.log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We set an empty variable named secret
// We set the variable named code equal to 123
// We check if code is exactly 123, if true we set secret equal to 'super' and set code equal to itself multiplied by 2.
// We check if code is greater than 250, if true we set secret to 'duper'
// We then console.log "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create 3 variables and give them values. First we create isStudent and we set that variable to a boolean true. Second we create age and is set to 34, Third we create zip and thats set to 55407;
// Then we check if isStudent true and if zip is greater than 80000 if both are true we console.log "You're a student on the West Coast!" if either are false we then check if isStudent is equal to
// false or age is greater than 30. If either of those are true we console.log "What are your hobbies" if both are false we check if isStudent is equal to true, if so we console.log "Welcome to Prime"
// if false we console.log "how about the weather?"
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - Both variables are set to wrong values
//Should be let colorOne= 'blue';
//          let colorTwo= 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// FIX - missing line to change colorTwo to purple
if (mix === true) {
  colorOne = 'purple';
//Should have colorTwo = 'purple';  
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//Fix- Starting with two variables that could change we would need to swap out const for let
//Should be let time = 4;
const time = 4;
// FIX - We want to check if both are true not just one. 
//Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - We want to check if age >= minAge so we need to switch those then change if console.log to 'enter' and else console.log to 'no entry'. Fix is in single line comments below
//if (age >= minAge){
//  console.log('enter');
//}else {
//  console.log('no entry);
//}
           
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

