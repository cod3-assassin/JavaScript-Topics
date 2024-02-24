let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].innerHTML;

output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";

output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Helllo";

console.log(output);
//Parent node

let x;
const child = document.querySelector(".child");
x = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";

console.log(x);

//Siblings

let z;

const secondItem = document.querySelector(".child:nth-child(2)");

z = secondItem.nextSibling;
z = secondItem.previousSibling;
console.log(z);
