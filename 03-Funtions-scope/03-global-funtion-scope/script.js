console.log(window.innerWidth);

const x = 100;
console.log(x, "in Global");
function run() {
  console.log(window.innerHeight);
  console.log(x, "in Function");
}
run();

if (true) {
  console.log(x, "in Block");
}

function add() {
  const x = 1; //variable shadowing
  const y = 50;
  console.log(y + x);
}
add();
