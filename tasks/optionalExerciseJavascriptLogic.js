// Question 1: Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20], make a function
// that organizes these into individual array that is ordered.For example
// answer(ArrayFromAbove) should return:
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].
// Bonus: Make it so it organizes strings differently from number
// types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

const arrayToClean = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

const cleanArray = (array) => {

    array.sort(function (a, b) { return a - b });
    
    grouped = array.reduce((output, el, index, arr) => {
        if (el === arr[index - 1]) {
            output[output.length - 1].push(el);
        } else {
            output.push(el === arr[index + 1] ? [el] : el);
        }
        return output;
    }, []);

    return console.log(grouped);
}

console.log('Question 1: ')
cleanArray(arrayToClean);

// --------------------------------------

const bonusArray = [1, "2", "3", 2];
// expected =  [[1, 2], ["2", "3"]]

const cleanBonusArray = (array) => {

    sortArray = (arr) => {

        let numArr = arr.filter((el) => typeof el === 'number').sort((a, b) => (a - b));
        let strArr = arr.filter((el) => typeof el === 'string').sort();
        return [numArr].concat([strArr]);
    }

    array = sortArray(array);
    
    grouped = array.reduce((output, el, index, arr) => {

        if (el === arr[index - 1]) {
            output[output.length - 1].push(el);
        } else {
            output.push(el === arr[index + 1] ? [el] : el);
        }
        return output;
    }, []);

    return console.log(grouped);
}

console.log('Bonus Array: ')
cleanBonusArray(bonusArray);

// Question 2: Write a javascript function that takes an array of numbers and
// a target number.The function should find two different numbers in the array
// that, when added together, give the target number.For example:
// answer([1, 2, 3], 4)should return [1, 3]

const findPair = (numbers, target) => {

  const seenNumbers = new Set();

  for (let i = 0; i < numbers.length; i++) {

    const complement = target - numbers[i];

      if (seenNumbers.has(complement)) {
        
      return [numbers[i], complement];
    }
    seenNumbers.add(numbers[i]);
  }

  return null;
}

console.log('Question 2: ')
console.log(findPair([1, 2, 3, 4], 6))

// Question 3: Write a function that converts HEX to RGB.Then Make that 
// function auto-dect the formats so that if you enter HEX color format it 
// returns RGB and if you enter RGB color format it returns HEX.

function convertColor(color) {
  // Check if the input is a HEX color.
  if (color.startsWith('#')) {
    return hexToRgb(color);
  } 
  // Check if the input is an RGB color.
  else if (color.includes('rgb') || color.includes('rgba')) {
    return rgbToHex(color);
  } else {
    // Handle invalid input
    return "Invalid color format";
  }
}

function hexToRgb(hex) {
  // Remove the '#' symbol.
  hex = hex.replace('#', '');

  // Check if the hex code is 3 or 6 characters long.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Convert the hex code to decimal values.
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB color string.
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(rgb) {
  // Remove the 'rgb(' or 'rgba(' and ')' characters.
  rgb = rgb.replace('rgb(', '').replace('rgba(', '').replace(')', '');

  // Split the RGB values by comma.
  const values = rgb.split(',');

  // Convert the decimal values to hex values.
  const r = parseInt(values[0]).toString(16).padStart(2, '0');
  const g = parseInt(values[1]).toString(16).padStart(2, '0');
  const b = parseInt(values[2]).toString(16).padStart(2, '0');

  // Return the HEX color string.
  return `#${r}${g}${b}`;
}

// Example usage:
console.log(convertColor('#FF0000')); // Output: rgb(255, 0, 0)
console.log(convertColor('rgb(255, 0, 0)')); // Output: #FF0000
console.log(convertColor('invalid')); // Output: Invalid color format