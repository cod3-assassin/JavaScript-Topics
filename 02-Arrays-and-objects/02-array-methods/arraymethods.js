let x;

const arr = [23, 45, 56, 67, 34];

console.log(arr);

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(99);
console.log(arr);

arr.shift();
console.log(arr);

// arr.reverse();
// console.log(arr);

x = arr.includes(20);
console.log(x);

x = arr.indexOf(34);
console.log(x);

// x = arr.slice(1, 4);
// console.log(x);

// x = arr.splice(1, 4);
// console.log(x, arr);

// x = arr.splice(3, 1);
// console.log(x, arr);

// x = arr.slice(1, 4);
// console.log(x, arr);

x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
