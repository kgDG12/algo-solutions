// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

import inquirer from 'inquirer';

function selectionSort(array) {
  // Only change code below this line
  console.log(array)
  let iteration = 0
  for (let i = 0; i < array.length - 1; i++) {
    let smVal = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smVal] > array[j]) {
        smVal = j
        // console.log(`iteration ${++iteration}`)
        ++iteration
      }
    }
    // console.log(smVal, array[smVal], smVal)
    const temp = array[i]
    array[i] = array[smVal]
    array[smVal] = temp
    // ++iteration
  }
  // console.log(array)
  console.log(`Total swaps: ${iteration}`)
  return array;
  // Only change code above this line
}

// selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])

export default function implementSelectionSort() {
  console.log('implement-selection-sort');
  console.log('Implement an insertion sort in JavaScript.');
  console.log('https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'array',
        message: 'Enter an array (without "[]") of numbers to sort'
      }])
    .then(answers => {
      const array = answers.array.split(',').map(val => parseInt(val))
      console.log(selectionSort(array))
    });
}