// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const ifIncludes = dragons.includes('John') ? 'yes' : 'nope';
console.log(ifIncludes); 


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const includesJohn = dragons2.filter(word => word.includes('John'));

console.log(includesJohn);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const powerOf3 = num => num ** 100;

console.log(powerOf3(2))


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

console.log(powerOf3(10000)); // infinity

// infinity is a special value that represents an infinitely large number. There are two types of infinity in JavaScript: positive infinity and negative infinity. Positive infinity is greater than any finite number, and negative infinity is less than any finite number.