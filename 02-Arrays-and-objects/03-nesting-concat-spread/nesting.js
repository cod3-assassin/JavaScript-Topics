let x;

const fruites = ["Apple", "Orange", "Pear"];
const berries = ["Strawberry", "Blueberry", "Raspberry"];

//fruites.push(berries);

console.log(fruites);

//x = fruites[3][0];
console.log(x);

const allFruits = [fruites, berries];

x = allFruits[1][2];

console.log(x);

x = fruites.concat(berries);

console.log(x);

//Spread Operator (...)

x = [...fruites, ...berries];

console.log(x);

x = [...fruites, berries];

console.log(x);

//Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();

console.log(arr);
console.log(x);

//Static Methods on Array Object

x = Array.isArray(fruites);

console.log(x);

x = Array.from("12345678");

console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
