let x;

const name = "Assasin";
const age = 23;

x = "Hello my name is " + name + " and I am " + age + " years Old";
console.log(x);

//Template Literals

x = `Hello my name is ${name} and I am ${age} Years old`;
console.log(x);

//String Properties and Methods

const s = new String("Hello World");
x = typeof s;
x = s.length;

console.log(x);

//Access value by keys
x = s[0];
console.log(x);

//Prototypes
x = s.__proto__;
console.log(x);

x = s.toUpperCase();
console.log(x);

x = s.toLowerCase();
console.log(x);

x = s.charAt(6);
console.log(x);

x = s.indexOf("d");
console.log(x);

x = s.substring(1, 4);
console.log(x);

x = s.substring(7);
console.log(x);

x = s.slice(-11);
console.log(x);

x = "        hello";
x = x.trim();
console.log(x);

x = s.replace("World", "Coder");
console.log(x);

x = s.includes("Hello");
console.log(x);

x = s.valueOf();
console.log(s);

x = s.split("");
console.log(x);
