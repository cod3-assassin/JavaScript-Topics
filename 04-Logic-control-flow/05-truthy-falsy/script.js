//Falsy values
/* --false
   --0
   --"" or '' (Empty string)
   --null
   -- undefined
   --NaN
   
   */

const x = false;

if (x) {
  console.log("This is Truthy");
} else {
  console.log("Thid is Falsy");
}
console.log(Boolean(x));

//Truthy Value
/*  --Evrything else that is not falsy
    --true
    --"0" (0 in a string)
    --" " (space in a sring)
    --"false" (false in a string)
    --[] (empty Array)
    --{} (empty Object)
    --function () {} (empty function)
    */

const y = [];

if (y) {
  console.log("This is Truthy");
} else {
  console.log("Thid is Falsy");
}
console.log(Boolean(y));

//Truthy and Falsy Caveats

const children = 0;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please Enter Number of children");
}

//Cheking for empty array

const post = [];

if (post.length > 0) {
  console.log("List post");
} else {
  console.log("No Post to list");
}

//Cheking For empty Object

const user = {};
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No user");
}

//Loose Equality (==)

console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
