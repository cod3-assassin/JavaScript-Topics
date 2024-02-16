let x;
const todo = {};

todo.id = 1;

x = todo;
console.log(x);
const personn = new Object();

personn.name = "Skipper";

x = personn;
console.log(x);

todo.name = "Buy Milk";
todo.completed = false;

x = todo;
console.log(x);

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -782384,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
x = obj3;

console.log(x);

const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

const todos = [
  {
    id: 1,
    name: "Buy Milk",
  },
  {
    id: 2,
    name: "Pick Up ",
  },
  {
    id: 3,
    name: "Take Out Trash",
  },
];
x = todos;
console.log(x);

x = todos[1].name;
console.log(x);

x = Object.keys(todo);
console.log(x);

x = Object.keys(todo).length;
console.log(x);

x = Object.values(todo);
console.log(x);

x = Object.entries(todo);
console.log(x);

x = todo.hasOwnProperty("name");
console.log(x);
