// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
let a2 = 'test';
let b2 = true;
let c2 = 789;

const okObj = {a,b,c};


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city = 'Casablanca'} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const z = Symbol('This is my first Symbol');

// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const WhereAmI = (username, location) => {
    (username && location) ? 'I am not lost' : 'I am totally lost!';
}
