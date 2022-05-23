// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

//method 1
function myFunction(a, b) {
    let arr = a.split('')
    for (let i= arr.length - 3;i>0;i -=3){
    arr.splice(i,0,b)
}
    return arr.join('')
 }

 //method 2
 
function myFunction(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
 }