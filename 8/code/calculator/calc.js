// event listeners

// to change the type of variable from string to number
// parseFloat(variable)

// to change the type from number to string
// variable.toString()

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function handleClickNumber(number) {
  if (operator === "") {
    num1 = num1 + number;
  } else {
    num2 = num2 + number;
  }
  handleConsoleLog();
}

function handleFractions() {
  const f = ".";

  if (operator === "") {
    if (num1.includes(".") === true) return;

    num1 = num1 + f;
  } else {
    if (num2.includes(".")) return;

    num2 = num2 + f;
  }
  handleConsoleLog();
}

function handleMathOperator(o) {
  if (result === "" && num1 === "") {
    return;
  }

  if (result !== "" && num1 === "") {
    num1 = result;
  }

  if (operator !== "") {
    const res = getMathResult();

    if (res === false) return;
    num1 = result;
    num2 = "";
  }

  if (isNaN(num1)) return;

  operator = o;
  handleConsoleLog();
}

function handleClearAll() {
  handleConsoleLog();
}

function handleResult() {
  const res = getMathResult();

  if (res === false) return;

  num1 = "";
  num2 = "";
  operator = "";

  handleConsoleLog();
}

function handleConsoleLog() {
  console.log(num1 + " " + operator + " " + num2);
  console.log("result = " + result);
  console.log("----------");
}

function getMathResult() {
  if (isNaN(num1) || operator === "" || isNaN(num2)) {
    return false;
  }

  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2);
  } else {
    result = parseFloat(num1) / parseFloat(num2);
  }

  result = result.toString();

  return true;
}

/*

  1- layout 
  2- event listener for each html element
  3- fill the first variable if we didn't choose any operator
    else fill the second variable
*/
