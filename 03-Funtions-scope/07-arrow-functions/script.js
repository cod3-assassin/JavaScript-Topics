function add(a, b) {
  return a + b;
}
console.log(add(4, 6));

//Arrow Function Syntax

const addd = (a, b) => {
  return a + b;
};
console.log(addd(4, 6));

//Implicit Return

const subtract = (a, b) => a - b;

console.log(subtract(10, 5));

//Can leave of ( ) with a single param
const double = (a) => a * 4;

console.log(double(2));

//Returnig an Object

const createObject = () => ({
  name: "Skipper",
});
console.log(createObject());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//Arrow func in Callback

numbers.forEach((n) => console.log(n));
