const x = 100;

const foo = 1;
var bar = 2;
if (true) {
  const y = 20;
  console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
console.log(c);

for (var i = 0; i <= 10; i++) {}
console.log(i);

function run() {
  var d = 200;
  console.log(d);
}
run();
console.log(d);
