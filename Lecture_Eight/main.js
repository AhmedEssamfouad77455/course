// Array is group of values
// Array is data type
// These values can be anything (string, number, boolean, object, function, another array)
// Arrays in js are dynamic in size
// Arrays are flexible: can add/remove items at any position
// Arrays are zero indexed: first item is at index 0, second at index 1, and so on
const nums = [1, 2, 3];
const mixed = [1, "hello", { name: "K" }, [10, 20]];

// Creating an array
let arr1 = []; // empty array
let arr2 = [1, 2, 3]; // array with initial values
let arr3 = new Array(5); // creates an array of length 5 with undefined values
let arr4 = Array.of(1, 2, 3); // creates an array with give values
let fromString = Array.from("hello"); // creates an array from iterable (string here)
console.log(fromString);

// Accessing and modifying array elements
const arr = [10, 20, 30];
arr[0];
arr[2] = 99;
arr[arr.length] = 40;

// Array methods
let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // add to end
fruits.pop(); // remove from end
fruits.shift(); // remove from start and return it
fruits.unshift("kiwi"); // add to start and return the new length
fruits.splice(1, 2, "mango"); // remove 2 items from index 1 and add "mango" there
fruits.reverse(); // reverse the array
const sliced = fruits.slice(1, 3); // get a sub-array from index 1 to 2
fruits.indexOf("mango"); // get index of "mango"
fruits.includes("banana"); // check if "banana" is in array
fruits.juin(", "); // join array elements into a string

// sort an array
let numbers = [3, 1, 4, 1, 5, 9];
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a > b); // ascending
console.log(numbers);
numbers.sort((a, b) => b > a); // descending
console.log(numbers);
