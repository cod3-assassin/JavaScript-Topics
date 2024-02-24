function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

function createButton(classess) {
  const button = document.createElement("button");
  button.className = classess;
  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);
  return button;
}

function createIcon(classess) {
  const icon = document.createElement("i");
  icon.className = classess;
  return icon;
}

createNewItem("Sauce");
createNewItem("Groccery");
