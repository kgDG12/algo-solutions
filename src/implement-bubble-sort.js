// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

// Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

import inquirer from 'inquirer';

function bubbleSort(array) {
  // Only change code below this line
  console.log(array)
  const sortedArr = []
  let iteration = 0
  while (true) {
    let loop = true
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > array[i + 1]) {
        loop = false
        const lv = array[i]
        array[i] = array[i + 1]
        array[i + 1] = lv
        // console.log(`iteration ${iteration++}`)
        ++iteration
      }
    }

    if (loop) {
      console.log(`Total swaps: ${iteration}`)
      sortedArr.push(...array)
      // console.log(sortedArr)
      break;
    }
  }
  return sortedArr;
  // Only change code above this line
}

// bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

export default function implementBubbleSort() {
  console.log('implement-bubble-sort');
  console.log('Implement a bubble sort in JavaScript.');
  console.log('https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'array',
        message: 'Enter an array (without "[]") of numbers to sort'
      }])
    .then(answers => {
      const array = answers.array.split(',').map(val => parseInt(val))
      console.log(bubbleSort(array))
    });
}