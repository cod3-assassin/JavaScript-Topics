const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good Mornning ");
} else if (hour < 18) {
  console.log("Good AfterNoon");
} else {
  console.log("Good Night");
}

//Nested If

if (hour < 12) {
  console.log("Good Mornning ");

  if (hour === 6) {
    console.log("Wake Up");
  }
} else if (hour < 18) {
  console.log("Good AfterNoon");
} else {
  console.log("Good Night");

  if (hour >= 20) {
    console.log("zzzzzzzz");
  }
}

if (hour >= 7 && hour < 15) {
  console.log("It is Work time");
}

if (hour === 6 || hour === 20) {
  console.log("Brush the teeth");
}
