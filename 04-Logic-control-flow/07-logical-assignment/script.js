/* ||= assigns the right side value only if the left is falsy value */

let a = false;
// if (!a) {
//   a = 10;
// }
a = a || 10;

console.log(a);
// &&= assigns the right side value only if the left i s truthy value

let b = 20;

if (b) {
  b = 40;
}

b = b && 20;
console.log(b);

//??= assigns the right side value if the left is null or undefiend

let c = null;
if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;
console.log(c);
