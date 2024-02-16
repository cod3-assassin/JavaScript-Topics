//Challenge 1

function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}
console.log(getCelsius(40));

//Arrow Funtion
const getCelsiuss = (f) => ((f - 32) * 5) / 9;
console.log(`The Temp is ${getCelsiuss(50)}\xB0C`);

//Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

//Challenge 3

((length, width) => {
  const area = length * width;
  console.log(
    `The Area of a rectangle with alength of ${length} and a width of ${width} is ${area}`
  );
})(5, 9);
272018370196;
