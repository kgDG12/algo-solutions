// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
import inquirer from 'inquirer';

function permutation(str) {
  if (str.length < 2) {
    return str;
  }
  const permutated = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const leftover = str.slice(0, i) + str.slice(i + 1, str.length)
    // console.log(char, leftover)
    for (let permutate of permutation(leftover)) {
      permutated.push(char + permutate)
    }
  }
  return permutated
}

function countNonRepeat(arr) {
  if (arr.length < 2) {
    return arr.length
  }
  let count = 0
  for (let i = 0; i <= arr.length; i++) {
    const regex = /([a-zA-Z0-9])\1/g
    if (regex.test(arr[i])) {
      count++
    }
  }
  return arr.length - count
}

function permAlone(str) {
  const permutatedString = permutation(str)
  console.log(permutatedString)
  const nonRepeatCount = countNonRepeat(permutatedString)
  console.log(nonRepeatCount)
  return nonRepeatCount
}

// permAlone('aba');

export default function noRepeatsPlease() {
  console.log('no-repeats-please');
  console.log('Return the number of total permutations of the provided string that don\'t have repeated consecutive letters.Assume that all characters in the provided string are each unique.');
  console.log('https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'str',
        message: 'Enter a string to check for no repeats'
      }
    ])
    .then(answers => {
      permAlone(answers.str);
    });
}