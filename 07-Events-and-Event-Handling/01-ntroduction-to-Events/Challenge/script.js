document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    console.log("Clicked the button !");

    // Toggle the button text
    button.textContent =
      button.textContent === "Click Me!" ? "Clicked !" : "Click Me!";

    // Generate random color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    // Change background color to the random color
    document.body.style.backgroundColor = randomColor;
  });
});
