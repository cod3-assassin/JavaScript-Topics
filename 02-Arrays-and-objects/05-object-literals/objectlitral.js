let x;

const person = {
  name: "john doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 main st",
    city: "New York",
    state: "LA",
  },
  hobbies: ["music", "anime"],
};

x = person.name;
console.log(x);

x = person["age"];
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies;
console.log(x);

x = person.hobbies[0];
console.log(x);

x = person.name = "Skipper Doe";
x = person;
console.log(x);

x = person["isAdmin"] = false;
console.log(person);

delete person.age;
x = person;

console.log(x);

person.hasChildren = true;
person.greet = function () {
  console.log(`Hello ,my name is ${this.name}`);
};

person.greet();

x = person;

//console.log(x);
