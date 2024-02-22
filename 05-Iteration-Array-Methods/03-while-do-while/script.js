let i = 0;

while (i <= 20) {
  console.log("Number" + i);
  i++;
}

//Loop over arrays
let x = 0;
const arr = [10, 20, 30, 40];

while (x < arr.length) {
  console.log(arr[x]);
  x++;
}

//Nesting While Loops

let z = 1;
while (z <= 5) {
  console.log("Numbers " + z);

  let y = 1;
  while (y <= 5) {
    console.log(`${z}*${y} =${z * y}`);
    y++;
  }
  z++;
}

//Do While Loop

let b = 0;
do {
  console.log("Number " + b);
  b++;
} while (b <= 20);
