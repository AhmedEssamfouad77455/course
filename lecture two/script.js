// String Methods
// Operators
// If Condition
// Nested If Condition
// Condition Ternary
// Array
// Array Methods
// Loop

// \\\\\\\\\\\\\\\\\\\\\\ String Methods \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### String Methods ######");
let theName = "Adam";
console.log(theName);
console.log("###### Length ######");
console.log(theName.length);
console.log("0:A");
console.log("1:D");
console.log("2:A");
console.log("3:M");
console.log(theName[0]);
console.log(theName[1]);
console.log(theName[2]);
console.log(theName[3]);
console.log("###### CharAt ######");
console.log(theName.charAt(0));
console.log(theName.charAt(1));
console.log(theName.charAt(2));
console.log(theName.charAt(3));
console.log(theName[5]);
console.log(theName.charAt(5));
console.log("###### Trim ######");
let exampleOne = "      Adam    ";
console.log(exampleOne.charAt(1));
console.log(exampleOne[1]);
console.log(exampleOne);
console.log(exampleOne.trim());
console.log("###### toUpperCase & toLowerCase  ######");
let exampleTwo = "eng Salma";
console.log(exampleTwo.toLowerCase());

console.log("###### Task ######");

let exampleThree = "               j                ";
// Print exampleThree uppercase and with no space
console.log(exampleThree.trim().toUpperCase())
console.log("###### Index Of ######");
let exampleFour = "Robo Tech Future Raml Station";
console.log(exampleFour.indexOf("Raml"));
console.log(exampleFour.indexOf("Tech"));

console.log("###### Slice ######");
console.log(exampleFour.slice(0, 4));
console.log(exampleFour.slice(5, 9));

console.log("###### Repeat ######");
let exampleFive = "If";
console.log(exampleFive.repeat(10));
console.log("###### Split ######");

let exampleSix = "Web | Development | fatima";
console.log(exampleSix.split("|", 4));
console.log(exampleSix.split(" ", 17));

console.log("###### Includes ######");
let exampleSeven = "Laptop";
console.log(exampleSeven.includes("o"));
console.log(exampleSeven.includes("l"));

console.log("###### Start With ######");
let exampleEight = "Computer";
console.log(exampleEight.startsWith("c"));
console.log(exampleEight.startsWith("C"));

console.log("###### End With ######");
console.log(exampleEight.endsWith("r"));
console.log(exampleEight.endsWith("R"));

console.log("###### Task ######");
// robo technology future
// output tech
// robo technology future
// output [robo]

// \\\\\\\\\\\\\\\\\\\\\\ Operators \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### Operators ######");

/*
Comparison Operators
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal
    
    - < Smaller Than
    - <= Smaller Than Or Equal
*/

console.log("###### Equal ######");
console.log(10 == "10");// true
console.log(10 != "10"); // false
console.log(10 === "10");
console.log(10 !== "10");
console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);4
console.log('ahmed' == 'ahmed')
console.log("Ahmed" == "Yassin");
console.log(typeof "Ahmed" == typeof "Yassin");
console.log("###### Logical Operators ######");

/*
Logical Operators
- ! Not
- && And
- || Or
*/

console.log(true);
console.log(!true);
console.log(!(10 == "10"));
console.log(10 == "10" && 10 > 8 && 10 > 80);
console.log(10 == "10" || 10 > 8 || 10 > 80);

// \\\\\\\\\\\\\\\\\\\\\\ If Condition \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### If Condition ######");

let exampleNine = "Tech";
if (exampleNine == "tech") {
    console.log("Technology");
}

if (exampleNine == "Tech") {
    console.log("Technology");
}

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
    price -= discountAmount;
} else if (country === "Egypt") {
    price -= 40;
} else if (country === "Syria") {
    price -= 50;
} else {
    price -= 10;
}

console.log(price);

// \\\\\\\\\\\\\\\\\\\\\\ Nested If Condition \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### Nested If Condition ######");

let price2 = 100;
let discount2 = false;
let discountAmount2 = 30;
let country2 = "Egypt";
let student = true;

if (discount2 === true) {
    price2 -= discountAmount2;
} else if (country2 === "Egypt") {
    if (student === true) {
        price2 -= discountAmount2 + 30;
    } else {
        price2 -= discountAmount2 + 10;
    }
} else {
    price2 -= 10;
}

console.log(price2);

// \\\\\\\\\\\\\\\\\\\\\\ Condition Ternary \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### Condition Ternary ######");

console.log("theName === 'adam' ? == if(theName === 'adam')");
console.log("console.log('adam') :");
console.log("console.log('Ahmed') === if false");
let theGender = "female";
theGender == "male" ? console.log("ahmed") : console.log("yassin");

// \\\\\\\\\\\\\\\\\\\\\\ Switch \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log("###### Switch ######");

let holiday = 0;
let money = 0;

switch (holiday) {
    case 0:
        money = 5000;
        console.log(`my money is : ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`my money is : ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`my money is : ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`my money is : ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`my money is : ${money}`);
        break;
    default:
        money = 0;
        console.log(`my money is : ${money}`);
}

console.log("###### Task ######");

