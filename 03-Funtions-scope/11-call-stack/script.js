//First Example

function first() {
  console.log("First...");
}

function second() {
  console.log("Second...");
}

function third() {
  console.log("Third...");
}

first();
second();
third();

//Second Example

function fourth() {
  console.log("Fourth...");
  fifth();
}

function fifth() {
  console.log("Fifth...");
  sixth();
}

function sixth() {
  console.log("Sixeth...");
}

fourth();
