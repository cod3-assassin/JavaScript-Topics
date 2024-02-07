let x;

//Array Literal

const numbers = [12, 34, 56, 65, 79];
console.log(numbers);

const mixed = [12, "Hello", true, null];
x = numbers.length;
console.log(x);
//Array Constructor

const fruits = new Array("Apple", "grape", "orange");
fruits[3] = "mango";
fruits[fruits.length] = "blue berry";
fruits[fruits.length] = "peach";
x = fruits;

//fruits.length = 2;
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = `My Favourite Fruite is ${fruits[1]}`;
console.log(x);
