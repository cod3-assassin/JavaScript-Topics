//insertAdjacentElement example

function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}
insertElement();

//insertAdjacentText example

function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("afterend", "insertAdjacentText");
}

insertText();
//insertAdjacentHTML example

function insertHTML() {
  const clearbtn = document.querySelector("#clear");

  clearbtn.insertAdjacentHTML("afterbegin", "<h2>insertAdjacentHTML</h2>");
}
insertHTML();
//insertBefore Example

function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");

  li.textContent = "InsertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();
/*
<!-- beforebegin-->
<p>

<!-- afterbegin-->

foo

<!-- beforeend-->

</p>
<!-- afterend-->


*/
