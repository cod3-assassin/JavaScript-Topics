const age = 17;

//using an if statement

if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You cannot Vote !!!");
}

//using the Ternary operators

age >= 18 ? console.log("You can Vote") : console.log("You cannot Vote !!!");

//Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can Vote !" : "You Cannot Vote !";

console.log(canVote);
console.log(canVote2);

//Multiple Statemnet

const auth = true;
//let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/Dashbord";
// } else {
//   alert("Access Denied");
//   redirect = "/Login";
// }

const redirect = auth
  ? (alert("Wlcom to the DashBord"), "/Dashbaord")
  : (alert("Acces Denied"), "/Login");

console.log(redirect);

auth ? console.log("Welcome") : null;
auth && console.log("Welcome to DashBoard ");
