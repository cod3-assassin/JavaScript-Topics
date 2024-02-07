//  1

const myString = "devloper";
const output = myString[0].toUpperCase();
const newString = myString.substring(1);
console.log(output + newString);

// 2

const mysTring = "devloper";
const ouTput = myString.charAt(0).toUpperCase();
const newsTring = myString.substring(1);
console.log(ouTput + newsTring);

//  3

const mystRing = "devloper";
const newstRing = mystRing[0].toUpperCase() + mystRing.substring(1);
console.log(newstRing);

//  4

const mYstring = "devloper";
const [firstLetter, ...rest] = mYstring;
const neWstring = firstLetter.toUpperCase() + rest.join("");
console.log(neWstring);
