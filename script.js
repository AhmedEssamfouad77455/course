// language javascript
// console.log
// data type
// variables (var , let , const) part 1
// increment
// post increment
// pre increment
// pre decrement
// operation number
// number methods

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ console.log \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log("hello");
console.error("error");
console.error("error");

console.log("hello");
console.table(["Ahmed", "Adam", "yassin"]);

let rName = 5;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ data type \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(typeof "rName");
console.log(typeof "name");
console.log(typeof `name ${rName}`);
console.log(name);
console.log(typeof 20);
console.log("################");
console.log(typeof true);
console.log("################");
console.log(typeof false);
console.log([1, 2, 3]);
console.log(typeof [1, 2, 3]);
console.log({ name: "ahmed", age: 25, country: " egy" });
console.log(typeof { name: "jayda", age: 13, country: " eng" });

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ variables \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ keyword variables \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var name =
  "fkrfjfjassdsffdgfgfgfgfdggfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgf";
console.log(name);
var name = "yousef";
name = "vfdef";
console.log(name);
let age = 18;
// let age = 18;
age = 20;
console.log(age);
const place = "hhh";
// place= "44444"
// place ='asfdfs';
console.log(place);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ variable name  variables \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let 1asdgfsdag ="" ;
// let var ="" ;
// let function = "" ;
// let na  me = "" ;
// let name1 = "" ;

let handlChange = "";
let _handleChange = "";
let $handleChange = "";

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ increment \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log(5 + 4);
console.log(20 + 1);

let num = 20;
num = num + 1;
console.log(++num);
++num;
++num;
// pre increment
console.log("#########################################");
console.log(++num); //22
// post increment
console.log(num++);

console.log("#########################################");
console.log(num);
// decrement
console.log(--num);
console.log(num--);
console.log(num);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ operation number \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(2 + 5);
console.log("ahmed" + " " + " essam");
console.log(2 + "number");
console.log(2 - "ahmed");
console.log(typeof (2 - "ahmed"));

console.log(2 * 8);

console.log(2 / 8);

console.log(2 % 8);
console.log(true);
console.log(typeof +"100gberhe");
console.log(+"100asdgf");

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Unary Plus And Negation Operators \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(100);
console.log("100");
console.log(+"100");
console.log(-"100");
console.log(+"Ahmed");
console.log(-"Ahmed");
console.log(Number("10230"));

let a = "10";
let b = 20;
let c = true;
// Task
//(a + b); // Output 30
//(c + a); // output 11
//(a + b + c) // output 31
//(a + c) // output 9
console.log(+a + b);
console.log(c + +a);
console.log(+a + b + c);
console.log(+a + -c);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Assignment Operators \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let d = 10;
d = d + 20;
console.log(d);
d = d + 70;
console.log(d);
d += 100;
console.log(d);
d -= 50;
console.log(d);
d /= 2;
console.log(d);
d *= 3;
console.log(d);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Number Lesson \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(typeof Number);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
// Task
// let x = Number"4"; // How To Make It A Number With Two Methods
