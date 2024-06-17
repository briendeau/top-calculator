// calculator algorithm - english
// a web calc displays a calculator, allows buttons to be clicked
// numbers change on the display and math operations are applied to
// numbers. a number must be selected before a operator.
// equals signs applies the number operator number calculation.

// operations consist of  a number operator and number

// use the variables to update the display

// store the display value somewhere for use in next step
// get the two numbers and operator that are input then call operate on them when user presses = key
// update the display inside the operate function
// calculator should not eval more than a single pair of numbers at a time
// round answers with long decimals so they don't overflow
// handle = before pressing numbers
// clear should wipe all existing data
// display error message if user divides by zero, don't crash calculator

// calculator app has all basic bath functions
function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let firstNum = null; // Store first number or null if not set
let secondNum = null; // Store second number or null if not set
let operator = ""; // Store operator

for (let button of buttons) {
  if (button.id !== "equals") {
    // Add event listener for non-equals buttons
    button.addEventListener("click", (e) => {
      let value = e.target.textContent;
      handleClick(value);
      e.preventDefault();
    });
  }
}

// Rest of your code... (equals button logic, operate function, etc.)

function handleClick(value) {
  if (!isNaN(value)) {
    // Number button clicked
    if (operator === "") {
      // If no operator yet, collect for first number
      display.textContent += value;
      if (firstNum === null) {
        firstNum = parseFloat(value);
      } else {
        firstNum = parseFloat(display.textContent); // Update firstNum with entire number so far (for decimal inputs)
        console.log(firstNum);
      }
    } else {
      // Operator already set, collect for second number
      if (secondNum === null) {
        secondNum = parseFloat(value);
        display.textContent = value; // Clear display and show second number
      } else {
        secondNum = secondNum * 10 + parseFloat(value); // Update secondNum for decimal inputs
        display.textContent = secondNum; // Update display with latest second number
      }
    }
  } else {
    // Operator button clicked
    operator = value;
    display.textContent += value; // Show operator on display
    console.log(operator);
  }
}

let equalsKey = document.getElementById("equals");
equalsKey.addEventListener("click", () => {
  if (operator !== "" && firstNum !== null && secondNum !== null) {
    console.log("Operator:", operator);
    console.log("First number:", firstNum);
    console.log("Second number:", secondNum);
    console.log("Calling operate with:", operator, firstNum, secondNum); // Log values before operate
    let total = operate(operator, firstNum, secondNum);
    display.textContent = total;
    // resetCalculator(true); // Reset with display update (optional)
  } else {
    console.log("Missing values for calculation"); // Log if conditions not met
  }
});

function resetCalculator(updateDisplay = false) {
  firstNum = null;
  secondNum = null;
  operator = "";
  if (updateDisplay) {
    display.textContent = "0";
  }
}

let allClear = document.querySelector(".clear");
allClear.addEventListener("click", () => {
  resetCalculator(true); // Reset with display update
});

function operate(operator, numOne, numTwo) {
  if (operator === "+") {
    let result = add(numOne, numTwo);
    return result;
  } else if (operator === "-") {
    let result = subtract(numOne, numTwo);
    return result;
  } else if (operator === "*") {
    let result = multiply(numOne, numTwo);
    return result;
  } else if (operator === "/") {
    let result = divide(numOne, numTwo);
    return result;
  }
  // display.textContent = result;
  // console.log(result);
}
