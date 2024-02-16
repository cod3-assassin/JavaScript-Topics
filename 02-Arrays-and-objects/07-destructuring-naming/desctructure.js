const firstName = "Skipper";
const lastName = "Boss";

const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: "Take Out trash",
  user: {
    name: "Kwoloski",
  },
};

const { id: todoId, title } = todo;

console.log(todoId, title);

const {
  user: { name },
} = todo;
console.log(name);

const numbers = [12, 45, 56, 57, 32, 67];

const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);
