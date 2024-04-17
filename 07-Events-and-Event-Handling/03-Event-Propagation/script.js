document.getElementById("outerDiv").addEventListener(
  "click",
  function () {
    console.log("Outer div (BUBBLING)");
  },
  false
); // Setting useCapture to false to listen during the bubbling phase

document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    console.log("Inner div (BUBBLING)");
    // Uncomment the line below to stop the propagation
    // event.stopPropagation();
  },
  false
);

document.getElementById("outerDiv").addEventListener(
  "click",
  function () {
    console.log("Outer div (CAPTURING)");
  },
  true
); // Setting useCapture to true to listen during the capturing phase

document.getElementById("innerDiv").addEventListener(
  "click",
  function () {
    console.log("Inner div (CAPTURING)");
  },
  true
);
