// First Task: Create an object named member using Object Leteral Syntax and Object Constructor Syntax
// Create Your Object Here

// console.log(member.name); // SpiderMan
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); // My Name Is SpiderMan, My Age Is 38, I Live in Egypt

console.log("#######################################");

/// Second Task
// The main object includes three nested objects
// one of them does not include the bestThree property
// you have to use only for loop to get the following output
// Just Replace The Question Marks (???????)
// Don't Modify the code structure

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = "???????";

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ???????`);
  console.log(`The Publisher Is ???????`);
  console.log(`The Price Is ???????`);

  // Check If Nested Object Has Property (bestThree)
  if ("???????") {
    console.log("- Game Has Releases");
    console.log(`First => ???????`);
    console.log(`Second => ???????`);
    console.log(`Third => ???????`);
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
