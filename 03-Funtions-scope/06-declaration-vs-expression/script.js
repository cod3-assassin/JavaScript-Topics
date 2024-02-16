//Function declaration

function addDolarSign(value) {
  return "$" + value;
}
console.log(addDolarSign(100));

//Function Expression

const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(200));
