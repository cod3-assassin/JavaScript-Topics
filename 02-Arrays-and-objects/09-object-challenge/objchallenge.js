let x;
//Step 1
const library = [
  {
    title: "Wings of Fire",
    author: "APJ AbdulKlam",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "The Road Ahed",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },

  {
    title: "Moking Jsy",
    author: "Walter Colean",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
//Step 2
x = library[0].status.read = true;
x = library[1].status.read = true;
x = library[2].status.read = true;

//Step 3

const { title: firstBook } = library[0];

console.log(firstBook);

//Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
