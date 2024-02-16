//Challenge 1

const arr = [1, 2, 3, 4, 5];

arr.reverse();

arr.unshift(6);
arr.push(0);
console.log(arr);

//Challenge 2

const arrr = [1, 2, 3, 4, 5];
const arrr2 = [5, 6, 7, 8, 9, 10];
arrr2.shift(0);
const arrr3 = [...arrr, ...arrr2];

console.log(arrr3);

const arrrr = [1, 2, 3, 4, 5];
const arrrr2 = [5, 6, 7, 8, 9, 10];
const arrrr3 = arrrr.slice(0, 4).concat(arrrr2);
console.log(arrrr3);
