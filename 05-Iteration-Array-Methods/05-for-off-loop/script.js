//Loops Through Arrays

const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Skipper" }, { name: "Kvolski" }, { name: "Riko" }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

//Loop Over Strings

const str = "Hello World";
for (const letter of str) {
  console.log(letter);
}

//Loop over Maps

const map = new Map();
map.set("name", "Skiper");
map.set("age", 24);

for (const [key, value] of map) {
  console.log(key, value);
}
