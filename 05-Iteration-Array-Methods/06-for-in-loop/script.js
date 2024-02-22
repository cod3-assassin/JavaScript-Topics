const colorObject = {
  color1: "red",
  color2: "Blue",
  color3: "Orange",
  color4: "Green",
};

for (const key in colorObject) {
  console.log(key, colorObject[key]);
}

const colorArr = ["red", "orange", "blue", "green"];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
