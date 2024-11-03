console.log("Script");
//strings
let myName="Samantha" // declaration of a var and assigning the value
// numerical values
var myAge = 99;
let isStudent = false;

let lastName="Jimenez";
let mySize= 169;

// display the values on the console
console.log(myName);
console.log(myAge);
console.log(mySize);

// concatenation
console.log("My name is " + myName + ", I am " + 
    myAge + "years old and my is " + mySize);

    // operations

    let num1 = 10;
    let num2 = 2;

    let addition = num1+num2;
    let subs = num1 - num2;
    let division = num1 / num2;
    let multiplication = num1 * num2;
    
// sub, div, mult
    console.log("Additions is: " + addition);
    console.log("Subtraction is: " +subs);
    console.log("Division is: " + division);
    console.log("Multiplicaiton is: " + multiplication);
    subs = num1 - num2;
    division = num1 / num2;
    multiplication = num1 * num2;

    let a;
    const pi = 3.1416;
    let r = 3;
    a= pi * (r*r);
    console.log("The area of a circle with a radius of " + r + " is the " + a);

    let aVar = 20
    let otherVar = 30;

    console.log(aVar,otherVar); // 20 30

    aVar = 50
    otherVar = 60;

    console.log(aVar,otherVar); // 50 60

    const weekDays = 5;

    //weekDays=10; // the constants can't change

    console.log(weekDays);
// 1. Declare Variables
    // Using let
    let character = "Daisy";
    let action = "stay";
    let object = "a well fed beagle";
    let place = "bakery";
    let time = "a perfect Sunday";

    // Using "const"
    const occasion = "a puppy treat bakery";

    // 2. Create the Story
    console.log ("--- Funny Scene ---");
    console.log(character + " was at " + place + " on " + time + ".");
    console.log("When walking, " + character + " caught a glimpse of " + object + " and was happy to " + action + ".")
    console.log("Looking around she realized it was" + occasion + " and there were puppies everywhere!");

    // 3. Experiment with Different Values
    console.log("--- Different Version of the Story");

    // Change values to create a different story
    character = "Julia";
    action = "run";
    object = "a really big oak tree";
    place = "a dog park";
    time = "a busy Saturday";

    console.log(character + " was at " + place + "on" + time + ".");
    console.log("Effortlessly " + character + " played with many dogs near " + object + "and wanted to make them" + action + ".");
    console.log("All the dogs were puppies just coming from " + occasion + " and everyone took a nap afterwards!");