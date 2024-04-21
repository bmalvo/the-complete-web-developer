// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array2 = [];
array.forEach(el => {
  array2.push(el.username + '!')
})

console.log('names with "!": ', array2);

//Create an array using map that has all the usernames with a "?" to each of the usernames
const array3 = array.map(el => {
  return el.username + "?"
});

console.log('names with "?": ', array3);

//Filter the array to only include users who are on team: red
const array4 = array.filter(el => {
  return (el.team === 'red')
});

console.log('Only users from "red" team: ', array4);

//Find out the total score of all users using reduce
const total = array.reduce((acc, el) => {
  return acc + el.score
}, 0);

console.log('total score of all users: ', total);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, index) => {
	console.log('number ', index, ' is: ', num);
	// console.log(num);
	return num * 2;
})

console.log('Doubled numbers from array: ', newArray)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const arrayBonus = array.map(el => {
  return {
    username: el.username,
    team: el.team,
    score: el.score,
    items: el.items.map(el => {
      return el + '!'
    })
  }
  })


console.log('bonus array: ', arrayBonus)
