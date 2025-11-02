console.log("Condition ternary ");
 let theName = "John";

 let theGender = "male"  ; 
 let theAge = 20;
    if (theGender == "Male" ){
        console.log("Hello Miss " + theName);
    }  else{
        console.log("Hello Mr " + theName);
    }
    theGender == "female"  ?

    console.log("Hello Miss " + theName) :
    console.log("Hello Mr " + theName);

    theAge < 20 ?
    console.log("You are young") :
    theAge >= 20 && theAge <= 40 ?
    console.log("You are adult") :
    console.log("You are old"); 

    console.log("switch Statement"); 
let day = 0;
switch (day) {
    case 0:
        console.log("Monday");  
        break;
    case 1:
        console.log("Tuesday");     
        break;
    case 2:
        console.log("Wednesday");       
        break;
        default:
        console.log("Unknown Day"); 
}
let job = "Manager";
let salary = 0;
if(job == "Manager"){
    salary = 8000;
}   else if (job == "IT" ){
    salary = 6000;
}   else if (job == "Support" ){
    salary = 4000;
}   else if (job == "Developer" ){
    salary = 7000;
}   else if (job == "Designer" ){
    salary = 7000;
}


console.log("Array");
let fruits = ["apple", "banana", "grape", "orange", "cherry"];


let myFriends = ["Ahmed", "Sayed", "Ali", 1, true];
console.log(myFriends);
console.log(myFriends.length);
console.log(myFriends[0]);
console.log(myFriends[0][0]);

console.log(myFriends[myFriends.length - 1]); // index at 4
myFriends[3] = "Mahmoud";
console.log(myFriends);
myFriends[myFriends.length] = "Alaa";
console.log(myFriends);
let myFamilys = ["Ahmed", "Sayed", "Ali", 1, ["Sameh", "Gamal" , ["adam " , ["tamer"]]] , true , "Mahmoud"];
myFamilys[6] = ["Amr", "Ashraf"];


let myFamily = ["ahmed" , "sayed" , "Ali"] ; 

console.log("###################unshift###################")
myFamily.unshift("Alaa"); // add to start
console.log(myFamily.unshift("ahmed"));
console.log(myFamily);
myFamily.unshift("Nabil" , "Khaled");
console.log(myFamily);
console.log("###################Push###################")

myFriends.push("Amr", "Ashraf"); // add to end
console.log(myFriends)

console.log(myFriends);
console.log("###################shift###################")
myFriends.shift(); // remove from start
console.log(myFriends);
console.log("###################pop###################")
myFriends.pop(); // remove from end
console.log(myFriends);


let removed = myFriends.pop();
console.log(removed); // Amr
console.log(myFriends);
let myFriends2 = ["Sameh", "Gamal" , "Ameer"];
console.log(myFriends2.includes("Ali"));
console.log(myFriends2.includes("ameer"));
let allMyFriends = myFriends.concat(myFriends2);  // marge arrays
console.log(allMyFriends);

console.log("###################reverse###################")
console.log(allMyFriends.reverse());
console.log(allMyFriends.sort()); 
// Alphabetical
console.log("###################slice###################")
console.log(allMyFriends.slice(0,3)); // end with 3-1
console.log("###################join###################")
console.log(allMyFriends.join(" | ")); // to string and spilt with |
let fruits1 = ["apple", "banana", "cherry"];

let result = fruits.join(" - ");
console.log(result);
// "apple - banana - cherry"
let text = "apple - banana - cherry";

let result1 = text.split(" - ");
console.log(result);
// ["apple", "banana", "cherry"]


console.log("###################slice###################")
console.log(allMyFriends.slice(3));
console.log(allMyFriends.slice(-3)); // the last
console.log(allMyFriends.slice(-7));
console.log("###################index###################")
let index = allMyFriends.indexOf("Sayed"); // if not found return -1
console.log(index);
let index2 = allMyFriends.indexOf("Sayed", 3); // start from 3
console.log(index2);
console.log("###################lastIndex###################")
let index3 = allMyFriends.lastIndexOf("Sayed");
console.log(index3);
let index4 = allMyFriends.lastIndexOf("Sayed", 3);
console.log(index4);
// task 
console.log("Challenge 1");
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero" , "Elham", "Osama", "Gamal", "Ameer"];
// ["Osama" , "Elham" , "Mazero" , "Ahmed"]
// console.log()
// ["Elham" , "Mazero"]
// "rO"

// [Osama , ]


console.log("###################Loop###################")
for(let i = 0; i < 10; i++){
        console.log(` Hello ${i}`);
    }
    let myFriends3 = ["Ahmed", "Sayed", "Ali", "Mahmoud"];
    for(let i = 0; i < 5; i++){
            console.log(myFriends3[i]);
        }  
        for(let i = 0; i < myFriends3.length; i++){
                console.log(myFriends3[i]);
            }  
            for(let i = myFriends3.length - 1; i >= 0 ; i--){
    console.log(myFriends3[i]);
}
for(let i = 0; i < myFriends3.length; i++){
    console.log(`Hello ${myFriends3[i]}`);
}   
for(let i = 0; i < myFriends3.length; i++){
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i}`);
}       
for(let i = 0; i < myFriends3.length; i++){
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i + 1}`);
}       
for(let i = 0; i < myFriends3.length; i++){
    if(myFriends3[i] === "Sayed") break;
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i}`);
}   
for(let i = 0; i < myFriends3.length; i++){
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i}`);
    if(myFriends3[i] === "Sayed") break;
}   
for(let i = 0; i < myFriends3.length; i++){
    if(myFriends3[i] === "Sayed") continue;
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i}`);
}           
for(let i = 0; i < myFriends3.length; i++){
    console.log(`Hello ${myFriends3[i]} Your Index Is ${i}`);
    if(myFriends3[i] === "Sayed") continue;
}   
console.log("Challenge 2");
let friends = ["Ahmed", "Sayed", "Ali", 1, true, "Mahmoud", "Osama", "Sameh"];
let onlyNames = [];




my.pop()
my.pop()
my.splice(4,5)
console.log(my.reverse())

let part = my.slice(1,3)

console.log(part);