const Calculator = (num1, num2, oprator) => {
  switch (oprator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      console.log("Operation in not found");
  }
};

console.log(Calculator(3, 6, ""));
