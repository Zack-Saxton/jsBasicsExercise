// STRINGS - Contents inside of single or double quotes

console.log("Zack");
console.log('Zack');

// Strings with single or double quotes inside the string 

console.log(' "Zack E" ');
console.log(" 'Zack E' ");

// this below won't work because of the way quotes are set

// console.log('It don't work');

// -----------------------------------------------------------------------

// you can make it work by adding the \ which is an escape character

console.log('I\'ll make it work');

// Concatenation (adding strings together using the plus + sign)

console.log("BC" + "Skills");


// Length property - returns the length of characters and spaced in string 
console.log("BCDSA".length);
console.log("BC Skills".length);

console.log("hi".length + "bye".length);

// Index - STARTS AT 0
// Each character or space in a string has a set index 

console.log("BCDSA"[0]);
// will return letter C
