// Mouse events
document.getElementById("clickButton").addEventListener("click", () => {
  console.log("Button clicked");
});

document.getElementById("mouseArea").addEventListener("mouseover", () => {
  console.log("Mouse over the area");
});

document.getElementById("mouseArea").addEventListener("mouseout", () => {
  console.log("Mouse out of the area");
});

// Keyboard events
document.getElementById("keyInput").addEventListener("keydown", (event) => {
  console.log(`Key down: ${event.key}`);
});

document.getElementById("keyInput").addEventListener("keyup", (event) => {
  console.log(`Key up: ${event.key}`);
});

document.getElementById("keyInput").addEventListener("keypress", (event) => {
  console.log(`Key press: ${event.key}`);
});

// Form events
document.getElementById("myForm").addEventListener("submit", (event) => {
  console.log("Form submitted");
  event.preventDefault(); // Prevent form from submitting to see the console log
});

document.getElementById("myForm").elements[0].addEventListener("focus", () => {
  console.log("Input focused");
});

document.getElementById("myForm").elements[0].addEventListener("blur", () => {
  console.log("Input blurred");
});

document.getElementById("selectBox").addEventListener("change", (event) => {
  console.log(`Selected: ${event.target.value}`);
});

// Window events
window.addEventListener("load", () => {
  console.log("Window loaded");
});

window.addEventListener("resize", () => {
  console.log("Window resized");
});

window.addEventListener("scroll", () => {
  console.log("Window scrolled");
});
