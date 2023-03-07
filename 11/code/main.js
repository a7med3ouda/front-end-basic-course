/*
register
========
take data from user about himself
take data in form
right behaviour => user fill all required data then sumbit;
if submit without filling required data => return
notify him about the required data:
    1- error color on fields
    2- validation messages

if all data valid => allow submit
*/

function handleSubmit(e) {
  e.preventDefault();
  //   console.log(e);
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const male = document.getElementById("male");
  const female = document.getElementById("female");

  if (firstName.value === "") {
    firstName.classList.add("input__error");
    document.getElementById("first-name-error").hidden = false;
    return;
  } else {
    firstName.classList.remove("input__error");
    document.getElementById("first-name-error").hidden = true;
  }

  console.log("first name = " + firstName.value);

  if (lastName.value === "") {
    lastName.className = "input__error";
    alert("last name is required");
    return;
  }
  lastName.className = "";

  console.log("last name = " + lastName.value);

  if (email.value === "") {
    alert("email is required");
    return;
  }

  console.log("email = " + email.value);

  if (password.value === "") {
    alert("password is required");
    return;
  }

  console.log("password = " + password.value);

  if (day.value === "") {
    alert("day is required");
    return;
  }

  console.log("day = " + day.value);

  if (month.value === "") {
    alert("month is required");
    return;
  }

  console.log("month = " + month.value);

  if (year.value === "") {
    alert("year is required");
    return;
  }

  console.log("year = " + year.value);

  if (male.checked === false && female.checked === false) {
    alert("gender is required");
    return;
  }

  let gender;
  if (male.checked) {
    gender = male.value;
  } else {
    gender = female.value;
  }
  console.log("gender = " + gender);

  console.log("form is valid");

  //   const register = {
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //     email: email.value,
  //     password: password.value,
  //     day: day.value,
  //     month: month.value,
  //     year: year.value,
  //   };
}
