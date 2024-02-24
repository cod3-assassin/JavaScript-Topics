//Get child form parent

let output;
const parent = document.querySelector(".parent");
console.log(parent);

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child one";
parent.lastElementChild.innerText = "Child Three";

console.log(output);

// Get Parent element from a child

let x;

const child = document.querySelector(".child");
x = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

console.log(x);

//Sibling Elements

let z;

const scondItem = document.querySelector(".child:nth-child(2)");
z = scondItem;
console.log(z);
