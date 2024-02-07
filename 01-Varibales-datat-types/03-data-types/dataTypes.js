// PREMETTIVE TYPES

//String

const firstName = "Sara";

console.log(firstName, typeof firstName);

//Numbers

const age = 30;
const temp = 99.9;

console.log(age, typeof age);
console.log(temp, typeof temp);

//Boolean

const hasKids = true;
console.log(hasKids, typeof hasKids);

//NULL

const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

//Undefiend

let score;
console.log(score, typeof score);

//Symbol

const id = Symbol("id");
console.log(id, typeof id);

//BigInt

const n = 328978927893712897298n;
console.log(n, typeof n);

//REFRENCE TYPES

//Array

const numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);

//Object

const obj = {
  name: "john",
  age: 30,
};
console.log(obj, typeof obj);

//Function

function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);

//Premative vs Refrence

/*Premative Types : Store directly in the Stack ,where it can accessed from 

String | Number | Boolean| NULL| BigInt| undefined | Symbol */

/*Refrence Types :Store in the Heap and accessed by the refrence 

Arrays | Functions | Objects */
