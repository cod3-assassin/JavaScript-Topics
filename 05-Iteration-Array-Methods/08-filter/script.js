const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNmber = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNmber);

//Short Version

const evenNumber = numbers.filter((number) => number % 2 === 0);
console.log(evenNumber);

//same with for Each
let EvennumWithForEach = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    EvennumWithForEach.push(number);
  }
});

console.log(EvennumWithForEach);
