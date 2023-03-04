// string , number , boolean
// -------------------------
// string = 'ahmed' || "ahmed";
// number = 12345;
// boolean = true || false;

/*
    javascript variables
    --------------------

    undefined => declared variable without value 
                || declared variable with undefined value

    string , number , boolean => saved in memory by value;

    array , object => saved in memory by refrence;
*/

// let x;
// let y = undefined;

// console.log(typeof x);
// console.log(typeof y);

// Array
//-------

// let names = ["ahmed", "mohamed", "ali"];
// let numbers = [1, 2, 3, 4, 5];
// let binary = [true, true, false, true, false, false];
// let arrayOfArrays = [
//   ["ahmed", "ali"],
//   ["banana", "apple"],
// ];
// let mixed = ["ahmed", 222, true, ["mama"]];

//------------------
// array indexing
// let names = ["ahmed", "mohamed", "ali"];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//----------------------------

/*
    For Loop
    ========
    1- declare counter
    2- condition of temination debend on counter
    3- increase counter
*/

// for (let counter = 0; counter < 10; ) {
//   console.log(counter);
//   counter = counter + 4;
// }

// for (let i = 10; i >= 0; i = i - 1) {
//   console.log(i);
// }

// let names = ["ahmed", "mohamed", "ali"];

// let m;
// for (let index = 0; index < names.length + 5; index++) {
//   const element = names[index];
//   console.log(index);
//   console.log(element);
//   if (element === "mohamed") {
//     console.log("mohamed is founded");
//     m = index;
//     break;
//   }
// }

// console.log("=".repeat(16));
// console.log(names[m]);

/*
    while
    -----
    condition
*/

// let i = 0;
// while (i <= 50) {
//   console.log(i * 10);

//   i++;
//   if (i === 20) {
//     break;
//   }
// }

//========

// let names = ["ahmed", "mohamed", "ali"];

// names = names.slice(0, 2);

// console.log(names);

// function customSlice(arr, start = 0, end = arr.length) {
//   let newArr = [];

//   for (let i = start; i < end; i++) {
//     const element = arr[i];
//     newArr.push(element);
//   }

//   return newArr;
// }

let names = [
  "ahmed",
  "mohamed",
  "ali",
  "samir",
  "ibrahim",
  "mahmoud",
  "yousef",
];

// console.log(customSlice(names, 2, 5));

// let names = ["ahmed", "mohamed", "ali"];

// names.push("nono"); // add to array at last
// names.unshift("samir"); // add to array at first

// names.pop(); // remove from array from last
// names.shift(); // remove from array from first
// console.log(names);

// let x = "ahmed";

// for (let i = 0; i < x.length; i++) {
//   const ele = x[i];

//   console.log(ele);
// }
// console.log(x[2]);

// for (const name of names) {
//   console.log(name);
// }

/*
    Object

    key = value
*/

// let user = {
//   name: "ahmed",
//   age: 26,
//   address: ["cairo", "El Mahalla El Kubra"],
//   job: "full stack developer",
// };

// console.log(user);

/*
    object vs array
    ---------------
    --------    array               objecy
    arrange:    true                false
    get data:   index               key
    add data:   push(), unshift()   object.key = value
    remove data:pop(), shift()      delete object.key
*/

// console.log(user.name);
// console.log(user.job);
// console.log(user["name"]);
// console.log(user.email);

// let x = "name";

// console.log(user[x]);

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
//   console.log("--------");
// }

// user.email = "ahmed@gmail.com";

// user.email = "hamid@gmail.com";

// delete user.email;

// console.log(user);

document.getElementById("div-1").innerHTML = `<h1 style='color: red'>
    Title
  </h1>`;

document.querySelector("#input-1").value = "bebo";
document.querySelector("#input-1").placeholder = "name";
document.querySelector("#input-1").style.height = "40px";
document.querySelector("#input-1").style.color = "green";
