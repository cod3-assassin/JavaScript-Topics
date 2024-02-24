//querySelectorAll()

// const listItems = document.querySelectorAll(".item");

// console.log(listItems);

// console.log((listItems[1].innerText = "Orange Juice"));

// // listItems.style.color = "red";

// listItems.forEach((items, index) => {
//   items.style.color = "red";
//   if (index === 1) {
//     items.remove();
//   }
//   if (index === 0) {
//     items.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

const listItem2 = document.getElementsByClassName("item");
console.log(listItem2[2].innerText);
const listItemArray = Array.from(listItem2);
listItemArray.forEach((item) => {
  console.log(item.innerText);
});

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3[0].innerText);
