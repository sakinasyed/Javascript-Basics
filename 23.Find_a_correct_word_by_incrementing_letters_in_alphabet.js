// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// method 1
function myFunction(str) {
   
    return str
    .split('')
    .map((char)=>String.fromCharCode(char.charCodeAt() + 1))
    .join('')
 }

//  method 2

function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('');
  }