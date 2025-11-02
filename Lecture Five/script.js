console.log('###########tasKS #####################')
function sayHello(theName, theGender) {
  // Your Code Here
}

// Needed Output
sayHello('aHMED', "Male"); // "Hello Mr Ahmed"
sayHello("Eman", "female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
}

console.log('###########################################################')
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log('###########################################################')

function checkStatus(a, b, c) {
  // Your Code Here
}

// Needed Output
checkStatus("ahmed", 38, true); // "Hello ahmed, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Ahmed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Ahmed"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Ahmed", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log('###########################################################')

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000


console.log('###########################################################')

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log('###########################################################')
function specialMix(...data) {
  // Your Code Here
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



console.log("########### Closure #########");
let x = 0 ; 

function test1() {
  let x = 10 ;

  console.log(x);
}
test1(); // 10

console.log(x); 
function outer() {
  
  function inner() {
    let count = 0;

    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); 
counter(); 
counter(); 
function createCounter() {
  let clicks = 0;

  return function() {
    clicks++;
    console.log(`You clicked ${clicks} times`);
  };
}

const buttonCounter = createCounter();

buttonCounter(); // You clicked 1 times
buttonCounter(); // You clicked 2 times
buttonCounter(); // You clicked 3 times
buttonCounter(); // You clicked 4 times
buttonCounter(); // You clicked 5 times 
console.log('############## high order function###############')
function double(x) {
  return x * 2;
}

console.log(double(5)); // 10
function greet(name) {
  return "Hello " + name;
}

function processUserInput(call) {
  const name = "Ahmed";
  console.log(call(name));
}

processUserInput(greet); // Hello Ahmed
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double12 = multiplier(2);
console.log(double12(5)); // 10
let myNum =[1,2,3,4,5];
let empty = [ ];

for(let i = 0 ; i< myNum.length ; i++){
empty.push(myNum[i] + myNum[i]);

}
console.log(empty);
console.log('############# Map #################')
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map( function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
const nums = [1, 2, 3, 4];
const doubled1 = nums.map((num) =>( num * 2));
console.log(doubled1); // [2, 4, 6, 8]
const names = ["ahmed", "mona", "ali"];

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
 // ["AHMED", "MONA", "ALI"]
const users = [
  { name: "Ahmed", age: 22 },
  { name: "Sara", age: 19 },
  { name: "Omar", age: 25 }
];

const namesList = users.map(user => user.name);
console.log(namesList); // ["Ahmed", "Sara", "Omar"]
const products = ["Phone", "Laptop", "TV"];
const labeled = products.map(item => "Product: " + item);
console.log(labeled); // ["Product: Phone", "Product: Laptop", "Product: TV"]
const nums1 = [10, 20, 30];
const text = nums1.map(num => `${num} EGP`);
console.log(text); // ["10 EGP", "20 EGP", "30 EGP"]
console.log('##############filter#################')
const nums2 = [1, 2, 3, 4, 5, 6];
const even = nums2.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6]
const names3 = ["Ahmed", "Mona", "Ali", "Sara"];
const aNames = names3.filter(name => name.startsWith("A"));
console.log(aNames); // ["Ahmed", "Ali"]
const ages = [15, 18, 21, 25, 17];
const adults = ages.filter(age => age >= 20);
console.log(adults); // [21, 25]
const arr = ["Ahmed", "", "Mona", null, "Ali"];
const clean = arr.filter(Boolean);
console.log(clean); // ["Ahmed", "Mona", "Ali"]
const users3 = [
  { name: "Ahmed", active: true },
  { name: "Mona", active: false },
  { name: "Ali", active: true }
];

const activeUsers = users3.filter(u => u.active);
console.log(activeUsers);
// [{ name: "Ahmed", active: true }, { name: "Ali", active: true }]
console.log('#############reduce###############');
// array.reduce((accumulator, currentValue) => {
// }, initialValue);
const numbers4 = [1, 2, 3, 4, 5];

const sum = numbers4.reduce((total, num) => total + num, 0);

console.log(sum); // 15
const nums4 = [2, 3, 4];

const product = nums4.reduce((result, num) => result * num, 1);

console.log(product); // 24
const names5 = ["Ahmed", "Ali", "Sara"];

const totalLength = names5.reduce((sum, name) => sum + name.length, 0);

console.log(totalLength); // 13
const words = ["I", "love", "JavaScript"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence); // "I love JavaScript"
const products6 = [
  { name: "Phone", price: 5000 },
  { name: "Laptop", price: 10000 },
  { name: "Mouse", price: 500 }
];

const totalPrice = products6.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice); // 15500
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log("I like", fruit);
});
const numbers6 = [10, 20, 30];
let total = 0;

numbers6.forEach(num => {
  total += num;
});

console.log(total); // 60
const names6 = ["ahmed", "sara", "ali"];
const capitalized = [];

names6.forEach(name => {
  capitalized.push(name.toUpperCase());
});

console.log(capitalized); // ["AHMED", "SARA", "ALI"]
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`${index + 1} - ${color}`);
});
const users7 = [
  { name: "Ahmed", age: 22 },
  { name: "Mona", age: 25 },
  { name: "Omar", age: 19 }
];

users7.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});
const numbers7 = [1, 2, 3, 4];

// باستخدام forEach()
const doubled7 = [];
numbers7.forEach(num => {
  doubled7.push(num * 2);
});
console.log("forEach result:", doubled1); // [2, 4, 6, 8]

const doubled8 = numbers.map(num => num * 2);
console.log("map result:", doubled8); // [2, 4, 6, 8]
const names8 = ["Ahmed", "Ali", "Sara"];

names8.forEach(name => console.log("Hello", name));

names8.map(name => console.log("Hello", name));
const arr2 = [10, 20, 30];

const x2 = arr.forEach(num => num * 2);
const y2 = arr.map(num => num * 2);

console.log(x2); // undefined ❌
console.log(y2); // [20, 40, 60] ✅
const nums8 = [1, 2, 3, 4, 5];

// مع map نقدر نكمل عمليات تانية
const result = nums8
  .map(num => num * 2)
  .filter(num => num > 5);

console.log(result); // [6, 8, 10]

// array.find(function(element, index, array) {
//   // شرط معين
// });
const numbers8 = [3, 8, 12, 5, 20];

const result2 = numbers8.find(num => num > 10);

console.log(result2); // 12
const numbers10 = [3, 8, 12, 5, 20];

const names10 = ["Sara", "Ali", "Mona", "Ahmed"];

const foundName = names10.find(name => name.startsWith("A"));

console.log(foundName); // "Ali"
const products3 = [
  { name: "Phone", price: 8000 },
  { name: "Laptop", price: 15000 },
  { name: "Tablet", price: 6000 },
];

const laptop = products3.find(product => product.name === "Laptop");

console.log(laptop); 
// { name: 'Laptop', price: 15000 }
const nums3 = [1, 3, 5, 7];

const found = nums3.find(num => num > 10);

console.log(found); // undefined
const numbers11 = [5, 12, 8, 20, 7];

const found2 = numbers.find(num => num > 10);
const filtered = numbers.filter(num => num > 10);

console.log(found); // 12
console.log(filtered); // [12, 20]





















