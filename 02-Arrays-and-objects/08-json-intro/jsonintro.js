const post = {
  title: "Post One",
  id: 1,
  body: "this is the body",
};

console.log(post);

//Convert to JSON string

const str = JSON.stringify(post);
console.log(str);

//Parse JSON

const obj = JSON.parse(str);
console.log(obj);

const posts = [
  {
    title: "Post One",
    id: 1,
    body: "this is the body",
  },
  {
    title: "Post Two",
    id: 2,
    body: "this is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
