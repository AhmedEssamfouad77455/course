// foreach() => method used to iterate over the elements of an array
//              and apply a specified function (callback function)
//              to each element

//              array.foreach(callback)
//              element, index, array are provided

let numbers = [1, 2, 3, 4, 5, 6];

// Display element by forloop
function display(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

display(numbers);

// Display elements by foreach

numbers.forEach((n) => console.log(n));

function displayNumbers(element) {
  console.log(element);
}

numbers.forEach(displayNumbers); // The foreach will add the arg

// Double each element to display

function double(element, index, array) {
  array[index] = element * 2;
}

numbers.forEach(double);
console.log(numbers);

// Uppercase

let fruits = ["apple", "orange", "panana"];

// display
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
console.log(fruits);

// edit

function uppercase(element, index, array) {
  array[index] = element.toUpperCase();
}

fruits.forEach(uppercase);
console.log(fruits);

// Events
// Event attr
function sayHello() {
  alert("Hello JS");
}

let button = document.getElementById("btn");

button.onclick = function () {
  alert("Button Clicked");
};

let button02 = document.getElementById("btn-1");

button02.addEventListener("click", () => {
  alert("Button Clicked 02");
});

// Mouse Events: click, dblclick, mouseenter, mouseleave, mousemove
// Keyboard Events: keydown, keyup, keypress
// Form Events: submit, change, input, focus, blur
// Window Events: load, resize, scroll, unload
// Clipboard Events: copy, cut, paste

let button03 = document.getElementById("btn-2");
button03.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);
  console.log(event.type);
});

const link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Link clicked but not redirected!");
});

let button04 = document.getElementById("btn-3");
function sayHi() {
  alert("Hi!");
  button04.removeEventListener("click", sayHi);
}

button04.addEventListener("click", sayHi);
