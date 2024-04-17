// Custom Events
const button = document.getElementById("triggerEvent");
const event = new CustomEvent("customEvent", {
  detail: { message: "Custom event triggered" },
});

button.addEventListener("click", () => {
  button.dispatchEvent(event);
});

button.addEventListener("customEvent", (e) => {
  console.log(e.detail.message); // Output: Custom event triggered
});

// Event Delegation
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("Clicked on:", event.target.textContent);
  }
});

// Cross-Browser Event Handling
function addEvent(element, eventType, handler) {
  if (element.addEventListener) {
    element.addEventListener(eventType, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventType, handler);
  } else {
    element["on" + eventType] = handler;
  }
}

// Example of using the addEvent function for cross-browser compatibility
addEvent(window, "load", () => {
  console.log("Window loaded");
});
