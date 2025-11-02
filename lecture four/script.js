console.log("#########looping#########");
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log("h");
console.log("e");
console.log("l");
console.log("l");
console.log("o");
[
    "ahmed",
    "anas",
    "ali",
    "ammar",
]

// for loop

// let i = 0;

// while(condition){
//     //code 
//     //update
// }
let i = 0 ; 
  
while(i<10){
    console.log(i);
    // i = i + 1 ; 
    i++ ;
}
console.log(i)
while(i>0){
    console.log(i);
    i-- ;
}
console.log(i);
console.log("#########do while loop#########");
i = 0 ;
do{
    console.log(i);
    i++ ;
}   while(i<10);
console.log(i); 
console.log("###################task###############");
let myfriends =["Anas" , "Ahmed" , "Ali" , "Ammar" , "Abdullah"];
let index = 0 ;
let friend = ""; 

for(let i =  0  ; i< myfriends.length ; i++ ){
    console.log( 'My friend ' + myfriends[i]);

}

// output should be : "My friend is Anas" , "My friend is Ahmed" , "My friend is Ali" , "My friend is Ammar" , "My friend is Abdullah"
console.log("#########for loop#########");
for(let j = 0 ; j < 10 ; j++){
    console.log(j);
}
console.log("#########break and continue#########");
for(let j = 0 ; j < 10 ; j++){
    if(j===5){  
        break ;
    }   
    console.log(j);
}
for(let j = 0 ; j < 10 ; j++){
    if(j===5){  
        continue ;
    }   
    console.log(j);
}  
console.log("#########nested loop#########");
let nestedLoop = [
  [1,2,3], [4,5,6], [7,8,9],
  [10,11,12], [13,14,15],
  [16,17,18], [19,20,21],
  [22,23,24], [25,26,27],
  [28,29,30]
];

for (let j = 0; j < nestedLoop.length; j++) {
  for (let k = 0; k < nestedLoop[j].length; k++) {
    console.log(nestedLoop[j][k]);
  }
}
console.log("#########nested loop#########rdrd");
for(let j = 0 ; j < 3 ; j++){
    for(let k = 0 ; k < 3 ; k++){
        console.log(j , k);
    }
}
console.log("#########looping through string#########");
let str = "Hello";  
for(let j = 0 ; j < str.length ; j++){
    console.log(str[j]);
}   

    


console.log("#########looping through array#########");
let arr = ["Ahmed" , "Anas" , "Ali" , "Ammar" , "Abdullah"];   
for(let j = 0 ; j < arr.length ; j++){
    console.log(arr[j]);
}  
console.log("#########for of and for in#########");     
for(let num of arr){
    console.log(num);
}       
for(let index in arr){
    console.log(index , arr[index]);
}   
console.log("#########looping through object#########");
let obj = {
    name : "John" ,     
    age : 30 ,
    city : "New York"
}
console.log(obj.name);
for(let key in obj){
    console.log(key , obj[key]);
}  
//  tasks 
// I want a function where I can enter a number like 10 and it will show me all numbers from 1 to that number except 5  , 2 , 7
//  I want a function where I can enter a number like 10 and it will show me even numbers.
// I want a function where I can enter a number like 10 and it will show me odd numbers.
// I want a function where I can enter a number like 10 and it will show me the sum of all numbers from 1 to that number (1+2+3+...+10).
// I want a function where I can enter a number like 5 and it will show me the factorial of that number (5! = 5*4*3*2*1).
// I want a function where I can enter a string and it will reverse that string. 
// I want a function where I can enter an array of numbers and it will return the largest number in that array.


console.log("############ function #############");
// function // function name  + () + {
// }
console.log("#######################################");
console.log("welcome to website");
console.log("hello anas")
console.log("welcome to website");
console.log("hello ali")
console.log("welcome to website");      
console.log("hello ammar")
console.log("welcome to website");
console.log("hello abdullah")
console.log("welcome to website");  
console.log("######### Function Declaration #########");
function test(){
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
    console.log("hello ahmed")
    console.log("welcome to website");
}
// test();
// test();
// test();
// test();
// test();
console.log("!!!!!!!!!!!!!!!!!!!!!!!")

function greet(  name){
    // return "hello "
    console.log("hello " + name)
    // console.log("welcome to website");
}
greet("ahmed");
greet("anas");
greet("ali");
greet("ammar");
greet("abdullah");
function add(a , b){
    return a + b ;
}
console.log(add(5,10));
console.log(add(15,25));   
console.log(add(105,205));
console.log(add(1005,2005));
console.log(add(10005,20005));
let sum = add(5,10);
console.log(++sum);
let sum2 = add(15,25);
console.log(sum2);  
let sum3 = add(105,205);
console.log(sum3);
let sum4 = add(1005,2005);
console.log(sum4);  
let sum5 = add(10005,20005);
console.log(sum5);  

function isEven(num){
    return num % 2 === 0 ;
}
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(10));        
console.log(isEven(11));
console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-3));    
console.log("######### Function Expression #########");
const greetExp = function(name){
    console.log("hello " + name)
    console.log("welcome to website");
}
greetExp("ahmed");
greetExp("anas");
greetExp("ali");
greetExp("ammar");
greetExp("abdullah");



console.log("######### Arrow Function #########");
const square = function(num){
    return num * num ;
}   
console.log(square(5));
console.log(square(10));
console.log(square(15));
const square2 = (num) => {
    return num * num ;
}
console.log(square2(5));
console.log(square2(10));
console.log(square2(15));
const square3 = num => num * num ;
console.log(square3(5));    
console.log(square3(10));
console.log(square3(15));
const greet2 = name => {
    console.log("hello " + name)
    console.log("welcome to website");
}
greet2("ahmed");
greet2("anas");
greet2("ali");
greet2();
greet2("abdullah");
const add2 = (a , b) => a + b ;
console.log(add2(5,10));
console.log(add2(15,25));   
console.log(add2(105,205));
console.log(add2(1005,2005));
console.log(add2(10005,20005));
console.log("######### Default Parameters #########");
function greet3(name = "Guest"){
    console.log("hello " + name)
    console.log("welcome to website");
} 
greet3("ahmed");
greet3("anas");
greet3("ali");      
greet3("ammar");
greet3("abdullah");
greet3();
greet3(undefined);
greet3(null);
greet3("John");
function add3(a = 0 , b = 0){
    return a + b ;
}   
console.log(add3(5,10));
console.log(add3(15,25));   
console.log(add3(105,205)); 
console.log(add3(1005,2005));
console.log(add3(10005,20005));
console.log(add3());
console.log(add3(undefined,10));
console.log(add3(5,undefined));
console.log(add3(null,10));
console.log(add3(5,null));
console.log("######### Rest Parameters #########");
function sumAll(...numbers){
    let sum = 0 ;       
    for(let num of numbers){
        sum += num ;
    }       
    return sum ;
}   ;
console.log(sumAll(1,2,3));
console.log(sumAll(1,2,3,4,5));
console.log(sumAll(10,20,30,40,50,60,70,80,90,100));
console.log(sumAll());
console.log(sumAll(5));
console.log(sumAll(5,10));  
console.log(sumAll(5,10,15));
console.log(sumAll(5,10,15,20));
console.log("######### Spread Operator #########");
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = [...arr1 , ...arr2]; 
console.log(combined);



let obj1 = {
    name : "John" ,     
    age : 30    
}
let obj2 = {
    city : "New York" ,     
    country : "USA"
}
let combinedObj = {...obj1 , ...obj2};
console.log(combinedObj);
let arr3 = [1,2,3];
let arr4 = [...arr3 , 4,5,6];
console.log(arr4);
let obj3 = {
    name : "John" ,
    age : 30
}
let obj4 = {...obj3 , city : "New York" , country : "USA"};
console.log(obj4); 
console.log("########### Closure #########");
let x = 0 ; 

function test1() {
    let x = 10 ;

  console.log(x    );
}
test1(); // 10

console.log(x); 
function outer() {
  let count = 0;

  function inner() {

    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
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

