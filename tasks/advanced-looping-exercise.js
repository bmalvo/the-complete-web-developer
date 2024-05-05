const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

//2
// basket.forEach(item => console.log(item));

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = !arr ? -Infinity : 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] > highest) {
      highest = arr[i]
    }
  }

  return highest
}
console.log(biggestNumberInArray(array))
console.log(biggestNumberInArray(array2))
console.log(biggestNumberInArray(array3))

function biggestNumberInArray2(arr) {
  let highest = !arr ? -Infinity : 0;

  for (el of arr) {
    if (el > highest) {
      highest = el
    };
  };

  return highest
}
console.log(biggestNumberInArray2(array))
console.log(biggestNumberInArray2(array2))
console.log(biggestNumberInArray2(array3))

function biggestNumberInArray3(arr) {
  let highest = !arr ? -Infinity : 0;

  arr.forEach(el => {
    if (el > highest) {
      highest = el;
    }
  });

  return highest
}
console.log(biggestNumberInArray3(array))
console.log(biggestNumberInArray3(array2))
console.log(biggestNumberInArray3(array3))

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  
  res = `There is no ${lookingFor}.`

  for (element in basket) {
    if (element == lookingFor) {
      res = `We have ${lookingFor} in store`
    }
  }
  return res
};

console.log(checkBasket(amazonBasket, 'books'))
console.log(checkBasket(amazonBasket, 'gun'))
