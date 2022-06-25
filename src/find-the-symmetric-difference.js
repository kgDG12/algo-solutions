// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements.
// So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (no duplicates).
import inquirer from 'inquirer';

function removeItem(array, item) {
  let i
  array.findIndex((val, index) => {
    if (val == item) {
      i = index
    }
  })
  array.splice(i, 1)
}

function removeDupli(array) {
  // console.log([...new Set(array)])
  return [...new Set(array)]
}

function sym(...args) {
  const finalArr = []
  args.forEach((e, index) => {
    // console.log(e.sort())
    removeDupli(e).sort().map((val, index) => {
      if (!finalArr.includes(val)) {
        finalArr.push(val)
      } else {
        removeItem(finalArr, val)
      }
    })
  })
  // console.log(finalArr, 'final Array')
  return finalArr;
}

// sym([1, 2, 3, 3], [5, 2, 1, 4]);

export default function findTheSymmetricDifference() {
  console.log('find-the-symmetric-difference');
  console.log('The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.');
  console.log('https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'array1',
        message: 'Enter an array1 of numbers to check for symmetric difference'
      },
      {
        type: 'input',
        name: 'array2',
        message: 'Enter an array2 of numbers to check for symmetric difference'
      }])
    .then(answers => {
      const array1 = answers.array1.split(',').map(val => parseInt(val))
      const array2 = answers.array2.split(',').map(val => parseInt(val))
      console.log(sym(array1, array2))
    });
}