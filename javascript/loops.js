let todos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy',
];

// for loop

for (let i = 1; i < todos.length; i++){
    console.log(`${i}: ${todos[i]}`)
};

// while loop


let counter = 1;

while (counter < todos.length) {
    console.log(`${counter}: ${todos[counter]}`);
    counter++;
};

// do while loop

let counter2 = 0

do {
    console.log(`${counter2}: ${todos[counter2]}`);
    counter2++;
} while (counter2 < todos.length);

// forEach loop

todos.forEach((el, index) => {
    console.log(`${index}: ${el}!`);
});
