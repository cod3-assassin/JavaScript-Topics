//Default Parameter

function registerUser(user = "Riko") {
  //   if (!user) {
  //     user = "Riko";
  //   }
  return user + " is Register";
}

console.log(registerUser());

//Rest Parameters

function sum(...num) {
  let total = 0;

  for (const numbers of num) {
    total += numbers;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 100));

// Objects as Parameters

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}
const user = {
  id: 1,
  name: "Skipper",
};
console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Kowolski",
  })
);

//Arrays as Parameters

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
