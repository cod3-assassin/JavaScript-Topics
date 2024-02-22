for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 is a Number");
    break;
  } else {
    console.log(i);
  }
}

//Nest Loops

for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j} = ${i * j}`);
  }
}

//Loop Through an Array

const names = ["Riko", "Skipper", "Kwolski", "Private", "Dev"];

for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + " Is the Best");
  } else {
    console.log(names[i]);
  }
}
