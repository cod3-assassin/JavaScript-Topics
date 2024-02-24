const people = [
  {
    firstname: "Skipper",
    lastName: "Boss",
    email: "Skipper@gmail.com",
    phone: 111 - 111 - 1111,
    age: 30,
  },
  {
    firstname: "Kwolski",
    lastName: "Analytics",
    email: "Kwolski@gmail.com",
    phone: 222 - 222 - 2222,
    age: 25,
  },
  {
    firstname: "Riko",
    lastName: "Storer",
    email: "Riko@gmail.com",
    phone: 333 - 333 - 3333,
    age: 45,
  },
  {
    firstname: "Private",
    lastName: "Cute",
    email: "Private@gmail.com",
    phone: 444 - 444 - 4444,
    age: 19,
  },
  {
    firstname: "Dave",
    lastName: "Octopops",
    email: "Dave@gmail.com",
    phone: 555 - 555 - 5555,
    age: 24,
  },
  {
    firstname: "Classified",
    lastName: "Secret",
    email: "Classsified@gmail.com",
    phone: 666 - 666 - 6666,
    age: 38,
  },
  {
    firstname: "Alex",
    lastName: "Lion",
    email: "Alex123@gmail.com",
    phone: 888 - 888 - 8888,
    age: 17,
  },
];

//Chalenge 1
const youngPeople = people
  .filter((person) => person.age < 25)
  .map((person) => ({
    name: `${person.firstname} ${person.lastName}`,
    email: person.email,
  }));

console.log(youngPeople);

const oldPeople = people
  .filter((person) => person.age > 25)
  .map((peoples) => ({
    name: `${peoples.firstname} ${peoples.lastName}`,
    email: peoples.email,
  }));

console.log(oldPeople);

//Second Challenge

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positveNum = numbers
  .filter((num) => num >= 0)
  .reduce((acc, curr) => (acc += curr));

console.log(positveNum);

// Third Challenge

const words = ["coder", "programmer", "devloper"];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(cWords);
