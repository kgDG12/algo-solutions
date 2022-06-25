// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices.
// Each pair should use the lowest possible available indices.
// Once an element has been used it cannot be reused to pair with another element.
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
// The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

/*
  Index |	0 |	1 |	2 | 3 |	4
  Value	| 7	| 9	| 11 | 13 |	15
*/

// Below we'll take their corresponding indices and add them.
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

import inquirer from "inquirer"

function pairwise(arr, arg) {
  console.log(arr, arg)
  let count = 0
  const usedIndex = []
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] == arg
        && !usedIndex.includes(i)
        && !usedIndex.includes(j)
      ) {
        console.log(`${i}+${j}=${i + j}`)
        count += i + j
        usedIndex.push(i, j)
      }
    }
  }
  // console.log(count)
  return count;
}

// pairwise([1, 4, 2, 3, 0, 5], 7);

export default function implimentPairwise() {
  console.log('pairwise');
  console.log('Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.\nYou may use multiple pairs that have the same numeric elements but different indices.\nEach pair should use the lowest possible available indices.\nOnce an element has been used it cannot be reused to pair with another element.\nFor instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'array1',
        message: 'Enter an array1 (without "[]") of numbers to check for pairwise'
      },
      {
        type: 'input',
        name: 'arg',
        message: 'Enter an argument to check for pairwise'
      }])
    .then(answers => {
      const array1 = answers.array1.split(',').map(val => parseInt(val))
      const arg = parseInt(answers.arg)
      console.log(pairwise(array1, arg))
    });
}