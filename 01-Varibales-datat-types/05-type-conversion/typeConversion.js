//String to Number

let amount = "100";
console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

amount = +amount;
console.log(amount, typeof amount);

amount = Number(amount);

console.log(amount, typeof amount);

//String to decimal
amount = "99.6";
amount = parseFloat(amount);
console.log(amount, typeof amount);

//Number to String

let value = 100;
console.log(value, typeof value);

value = value.toString();
console.log(value, typeof value);

value = String(value);
console.log(value, typeof value);

//Number to Boolean

let number = 1;
number = Boolean(true);
console.log(number, typeof number);

//Nan
number = "Hello";
number = parseInt(number);
console.log(number, typeof number);

console.log(Math.sqrt(-1));

console.log(1 + NaN);

console.log(undefined + undefined);

console.log("Foo" / 3);
