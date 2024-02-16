(function () {
  const user = "Kwoslki";
  console.log(user);
  const hello = () => console.log("Hello from the IFFE");
  hello();
})();

(function (name) {
  console.log("Hello", name);
})("Riko");

(function hello() {
  console.log("Hello");
})();
