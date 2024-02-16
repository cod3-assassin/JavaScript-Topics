const d = new Date(2022, 1, 10, 19, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("It is a January");
    break;
  case 2:
    console.log("It is Feburary");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is not January ,Feburary or March");
}

switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
