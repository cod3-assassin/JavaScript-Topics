console.log(10 > 20 && 30 > 15 && 40 > 40);

console.log(10 > 20 || 10 < 40);

//&& Will return first falsy value or last value

let a;

a = 10 && 20;
a = 10 && 20 && 30;
console.log(a);

const post = ["Post One", "Post 2"];

post.length > 0 && console.log(post[0]);

// || Will return the first  Truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;

console.log(b);

// ?? Returns the right side oprand when the left is
//null or undefined

let c;

c = 10 ?? 20;
c = null ?? 30;
console.log(c);
