// Debouncing function
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Throttling function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const debounceInput = document.getElementById("debounceInput");
debounceInput.addEventListener(
  "input",
  debounce(function () {
    console.log("Input:", this.value);
  }, 250)
); // Execute the function 250ms after user stops typing

window.addEventListener(
  "scroll",
  throttle(function () {
    console.log("Throttled Scroll!");
  }, 1000)
); // Execute at most once per 1000ms

// Example for avoiding memory leaks
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);
button.addEventListener("click", function () {
  alert("Button clicked");
  // Proper cleanup to avoid memory leaks
  button.parentNode.removeChild(button);
  button.removeEventListener("click", arguments.callee);
});
