//Values are stored on the stack

const name = "John ";
const age = 30;
let newName = name;
newName = "Jonathan";
console.log(name, newName);
//Refrence value are store on the heap

const person = {
  name: "Brad",
  age: 40,
};

let newPerson = person;
newPerson.name = "Bradly";

console.log(person, newPerson);
