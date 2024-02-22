const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum2);

//Usign A For of Loop

const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};
console.log(sum3());

const cart = [
  { id: 1, name: "Products 1", price: 130 },
  { id: 2, name: "Products 2", price: 150 },
  { id: 3, name: "Products 3", price: 175 },
];

const total = cart.reduce(function (acc, producs) {
  return acc + producs.price;
}, 0);

console.log(total);
