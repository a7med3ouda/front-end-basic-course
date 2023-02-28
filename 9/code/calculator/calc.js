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
    if (num1.includes(f) === true) return;

    num1 = num1 + f;
  } else {
    if (num2.includes(f)) return;

    num2 = num2 + f;
  }
  handleConsoleLog();
}

function handleMathOperator(o) {
  // validation
  if (o !== "sr") {
    if (result === "" && num1 === "") {
      return;
    }

    if (result !== "" && num1 === "") {
      num1 = result;
    }
  }

  if (operator !== "") {
    const res = getMathResult();

    // validation
    if (res === false) return;
    num1 = result;
    result = "";
    num2 = "";
  }

  // validation
  if (isNaN(num1)) return;

  operator = o;
  handleConsoleLog();
}

function handleNumStatus(status) {
  if (operator === "") {
    if (num1.startsWith(status) === true) return;

    num1 = status + num1;
  } else {
    if (num2.startsWith(status)) return;

    num2 = status + num2;
  }
  handleConsoleLog();
}

function handleClearAll() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  handleConsoleLog();
}

function handleClearStepBack() {
  /*
    1- if result is not empty => clear result
    2- if result is empty => continue
    3- if num2 is not empty => delete last number from num2
    4- if num2 is empty => continue
    5- if operator is not empty => clear operator
    6- if operator empty => continue
    7- if num1 is not empty => delete last number from num1
    8- if num1 is empty => do nothing
  */

  if (result !== "") {
    result = "";
    handleConsoleLog();
    return;
  }

  if (num2 !== "") {
    num2 = num2.slice(0, num2.length - 1);
    handleConsoleLog();
    return;
  }

  if (operator !== "") {
    operator = "";
    handleConsoleLog();
    return;
  }

  if (num1 !== "") {
    num1 = num1.slice(0, num1.length - 1);
    handleConsoleLog();
    return;
  }
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
  // validation
  if (operator === "" || isNaN(num2)) {
    return false;
  }

  if (operator === "sr") {
    result = Math.sqrt(num2);
  } else {
    if (isNaN(num1)) {
      return false;
    }

    if (operator === "+") {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "*") {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "/") {
      result = parseFloat(num1) / parseFloat(num2);
    } else {
      result = parseFloat(num1) ** parseFloat(num2);
    }
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
