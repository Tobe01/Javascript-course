let isUserReady = confirm("Are you ready");
console.log(isUserReady);
if (isUserReady);
if (isUserReady) {
  alert("User ready!");
}

let issUserReady = confirm("Are you ready");
if (issUserReady)
console.log("User ready!");
alert("User ready")

let inputNumber = prompt("Please input a number");
if (inputNumber > 90 < 110) {
console.log("Bingo!")
} else {
  console.log("miss");
}

let firstName = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
  switch (operand) {
    case "+": result = firstNumber + secondNumber;
    break;
    case "-": result = firstNumber - secondNumber;
    break;
    case"/": result = firstNumber / secondNumber;
    break;
    default: result = "Error: unknown operand";
  }
} else {
  result = "Error: at least one of the entered values is not a number";
}
alert(result);