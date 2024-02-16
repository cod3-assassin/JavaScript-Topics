function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}
first();

if (true) {
  const x = 200;
  if (x == 200) {
    const y = 100;
    console.log(x + y);
  }
}
