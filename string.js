let string1 = 'Kian is my best friend';
let string2 = 'frontend and backend, development';

//charAt() returns character at specified position
//console.log(string1.charAt(4));

//split convert string to array.
let words = string1.toLowerCase().split(' ').sort();
//console.log(words);

//s is for space
console.log(string2.split(/\s/));

//s , splits by a command and a space
console.log(string2.split(/,\s/));

//[,\s/]+ splits by a command or a space or both
console.log(string2.split(/[,\s/]+/));

//[,.!?\s/]+ splits by comma, ., !, ? or a space or both
console.log(string2.split(/[,.!?\s/]+/));

//In the following example, split() looks for zero or more spaces, followed by a semicolon, followed by zero or more spaces—and, when found, removes the spaces and the semicolon from the string.
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);

let chars = string1.split('my');
//console.log(chars);

//join convert from array to string
let hyphenated = words.join(' ');
//console.log(hyphenated);

//slice
let sliced = string1.slice(2);
//console.log(sliced);

//replace Using a function to return the replacement text:
var str = 'Mr Blue has a blue house and a blue car';
var res = str.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});
console.log(res);

//Perform a global, case-insensitive replacement:
var res2 = str.replace(/blue/gi, 'red');

//Perform a global replacement:
var res = str.replace(/blue/g, 'red');
