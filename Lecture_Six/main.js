// Object Constructor
// new keyword used to create an object (syntactic sugar => don't have to write it)
// If no parameters are passed, an empty object is created
console.log("---------------Object Constructor----------------");

let obj01 = new Object();
let obj02 = Object();
let obj03 = new Object(undefined);
let obj04 = new Object(null);

console.log(obj01);
console.log(obj02);
console.log(obj03);
console.log(obj04);

console.log("---------------Object Literal Syntax----------------");

// Object literal syntax
let obj05 = {};

console.log(obj05);

console.log("---------------Object With Properties----------------");
let obj06 = {
  name: "John",
  age: 30,
  isStudent: false,
};

let obj07 = new Object();
obj07.name = "Jane";
obj07.age = 25;
obj07.isStudent = true;

console.log(obj06);
console.log(obj07);

// Add Properties + Descriptors
// value: the value of the property (Required)
// writable: if true, the value of the property can be changed (default is false)
// enumerable: if true, the property shows up during enumeration of the properties (default is false)
// configurable: if true, the property descriptor can be changed and the property can be deleted (default is false)
console.log("---------------Add Properties + Descriptors----------------");
let obj08 = {
  name: "Alice",
};

Object.defineProperty(obj08, "age", {
  value: 28,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(obj08);

obj08.age = 30; // This will not change the age property
delete obj08.age; // This will not delete the age property

for (let key in obj08) {
  console.log(key); // age will not be logged
}

console.log(obj08);

console.log("---------------Accessing Properties----------------");
let obj09 = {
  name: "Ali Mohamed",
  age: 22,
  isStudent: true,
};

console.log(obj09.name);
console.log(obj09["age"]);
console.log(obj09.isStudent);

console.log("---------------Methods in Objects----------------");
let obj10 = {
  firstName: "Mahmoud",
  lastName: "Ahmed",
  getFullName: function () {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  },
};

console.log(obj10.firstName);
console.log(obj10.lastName);
console.log(obj10.getFullName());

console.log("---------------Getter and Setter ----------------");
let obj11 = {
  firstName: "Sara",
  lastName: "Hassan",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(obj11.fullName); // Getter

obj11.fullName = "Lionel Messi"; // Setter

console.log(obj11.fullName); // Getter

console.log("---------------Looping----------------");
let obj12 = {
  name: "khaled",
  age: 35,
  isStudent: false,
};

for (let key in obj12) {
  console.log(key);
  console.log(key + ": " + obj12[key]);
}

console.log("---------------Builtin Methods----------------");
let obj13 = {
  player: "Lionel Messi",
  club: "Inter Miami",
  score: 98,
};

console.log(Object.keys(obj13));
console.log(Object.values(obj13));
console.log(Object.entries(obj13));

console.log("---------------DOM------------------");
// DOM = Document Object Model
// The DOM represents the document as a tree of nodes and objects
// This allows js to interact with the content, structure, and styles of web pages
// Document
//  └── html
//       ├── head
//       │     └── title
//       └── body
//             ├── h1#title
//             └── p.desc
// Each and every elementm in the HTML document is represented as an object in the DOM
// We can with DOM read, manipulate, create and delete elements and content
// How to access DOM elements using JS

const titleElement = document.getElementById("title"); // Get one element by ID
console.log(titleElement);

const descElements = document.getElementsByClassName("desc"); // Get elements by class name (HTML Collection)
console.log(descElements);

const pELements = document.getElementsByTagName("p"); // Get elements by tag name (HTML Collection)
console.log(pELements);

const queryDescElement = document.querySelector(".desc"); // Get first element that matches the CSS selector
console.log(queryDescElement);

const queryDescElements = document.querySelectorAll(".desc"); // Get all elements that match the CSS selector (NodeList)
console.log(queryDescElements);

console.log("---------------Manipulating DOM Elements------------------");
// Changing content
titleElement.textContent = "Hello from JS!";
queryDescElements.forEach((el) => {
  el.textContent = "This is a description changed by JS.";
});

// Changing HTMl
queryDescElement.innerHTML = "<b>Updated!</b>";

// Add Attributes
titleElement.setAttribute("class", "main-title");
console.log(titleElement.getAttribute("class"));
titleElement.removeAttribute("class");
console.log(titleElement.getAttribute("class"));

// Changing Styles
titleElement.style.color = "red";
titleElement.style.fontSize = "30px";

console.log(
  "---------------Creating and Deleting DOM Elements------------------"
);
// Creating Elements
const newPragraph = document.createElement("p");
newPragraph.textContent = "This is a new paragraph created by JS.";
document.body.appendChild(newPragraph); // Append to body

// Deleting Elements
newPragraph.remove();

console.log("---------------Append------------------");
// Append multiple elements
const divContainer = document.createElement("div");
const p1 = document.createElement("p");
p1.textContent = "Paragraph 1";
const p2 = document.createElement("p");
p2.textContent = "Paragraph 2";

divContainer.append(p1, p2);
document.body.appendChild(divContainer);

console.log("---------------Traversing the DOM------------------");

// Parent Element
const title = document.getElementById("title");
console.log(title.parentElement); // Get parent

// Children Elements
const body = document.body;
// Element children returns only element nodes (ignores text nodes and comments)
console.log(body.children); // HTMLCollection
console.log(body.firstElementChild);
console.log(body.lastElementChild);

// Sibling Elements
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// Node Elements returns all nodes (including text nodes and comments)
console.log(body.childNodes); // NodeList
console.log(title.nextSibling);
console.log(title.parentNode);

console.log("---------------ClassList API------------------");
title.className = "title main-title"; // set class attribute, overwrites existing classes

titleElement.classList.add("highlight"); // adds the class highlight without removing existing classes
console.log(titleElement.classList.contains("highlight")); // true

titleElement.classList.add("highlight", "big-text"); // adds multiple classes

titleElement.classList.remove("big-text"); // removes the class big-text
titleElement.classList.remove("main-title", "large"); // removes multiple classes, if the class doesn't exist, it is ignored

titleElement.classList.toggle("highlight"); // remove it if exists, add it if not

const newClasses = ["bordered", "shadow"];
titleElement.classList.add(...newClasses); // spread operator to add multiple classes from an array

if (titleElement.classList.contains("highlight")) {
  console.log("The element is highlighted!"); // returns true or false
}

titleElement.classList.replace("highlight", "accent"); // replace highlight class with accent, if highlight doesn't exist, nothing happens

// ClassName vs ClassList
// className returns the entire class attribute as a string
// classList returns a DOMTokenList of individual classes
// classList provides methods to manipulate classes easily
// className overwrites the entire class attribute when set
// classList allows adding/removing/toggling individual classes without affecting others
// Use classList for better control over individual classes
// ClassName is useful when you need to get or set the entire class attribute as a string
// classlist prefers more flexibility for manipulating classes

console.log("---------------End of Lecture Six------------------");
