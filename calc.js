let numMemory = [];
let firstNumber = 0;
let secondNumber;
let operator;

function add(one, two) {
  return one + two;
};

function subtract(one, two) {
  return one - two;
};

function divide(one, two) {
  if (two == 0) return "ERROR";
  else
    return one / two;
}

function multiply(one, two) {
  return one * two;
}

function operate(operator, num1, num2) {
  if (operator == "add") return add(parseFloat(num1), parseFloat(num2));
  if (operator == "subtract") return subtract(parseFloat(num1), parseFloat(num2));
  if (operator == "multiply") return multiply(parseFloat(num1), parseFloat(num2));
  if (operator == "divide") return divide(parseFloat(num1), parseFloat(num2));
}

function evaluateButton(e) {
  if (e.srcElement.id == "equals" && !upperDisplay.innerHTML.includes("=")) {
    upperDisplay.innerHTML = upperDisplay.innerHTML + parseFloat(secondNumber) + " = ";
    mainDisplay.innerHTML = operate(operator, firstNumber, secondNumber);
    secondNumber = mainDisplay.innerHTML;
  }
  if (!isNaN(e.srcElement.id)) {
    numMemory.push(e.srcElement.id);
    secondNumber = numMemory.join("");
    mainDisplay.innerHTML = parseFloat(secondNumber);
  }
  if (e.srcElement.classList.contains("operator")) {
    if ((upperDisplay.innerHTML.includes("+") ||
      upperDisplay.innerHTML.includes("-") ||
      upperDisplay.innerHTML.includes("*") ||
      upperDisplay.innerHTML.includes("/")) && !upperDisplay.innerHTML.includes("=")
    ) {
      upperDisplay.innerHTML = operate(operator, firstNumber, secondNumber);
      mainDisplay.innerHTML = "";
      secondNumber = upperDisplay.innerHTML;
    }
    upperDisplay.innerHTML = parseFloat(secondNumber) + e.srcElement.innerHTML;
    firstNumber = secondNumber;
    secondNumber = 0;
    mainDisplay.innerHTML = "";
    numMemory.length = 0;
    operator = e.srcElement.id;
  }
  if (e.srcElement.id == "comma") {
    if (!mainDisplay.innerHTML.includes(".")) {
      numMemory.push(".");
      mainDisplay.innerHTML = mainDisplay.innerHTML + ".";
    }
  }
  if (e.srcElement.id == "clear") {
    numMemory = [];
    secondNumber = 0;
    firstNumber = 0;
    mainDisplay.innerHTML = 0;
    upperDisplay.innerHTML = "";
  }
  if (e.srcElement.id == "delete") {
    if (numMemory.length==1) numMemory[0]=0;
    else 
    numMemory.pop();
    secondNumber = numMemory.join("");
    mainDisplay.innerHTML = parseFloat(secondNumber);
  }
}

const calcButtons = document.querySelectorAll("button");
const upperDisplay = document.querySelector("#first-row");
const mainDisplay = document.querySelector("#second-row");

calcButtons.forEach(button => button.addEventListener("click", evaluateButton));
